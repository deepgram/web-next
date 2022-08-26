---
title: "Sending Audio Files to Your Express.js Server"
description: "Learn how to easily send files through an HTML form to an Express.js server using the middleware package Multer."
date: 2021-11-18
cover: https://res.cloudinary.com/deepgram/image/upload/v1641852664/blog/2021/11/sending-audio-files-to-expressjs-server/Posting-Audio-File-to-Express-js-App%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - nodejs,
    - express
seo:
    title: "Sending Audio Files to your Express.js server"
    description: "Learn how to easily send files through an HTML form to an Express.js server using the middleware package Multer."
shorturls:
    share: https://dpgr.am/ca7e520
    twitter: https://dpgr.am/82b121d
    linkedin: https://dpgr.am/4575fc1
    reddit: https://dpgr.am/690a4f5
    facebook: https://dpgr.am/71c5aeb
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453820/blog/sending-audio-files-to-expressjs-server/ograph.png
---

Here at Deepgram, we work with audio files all the time. We have SDKs that make it easy for developers to send audio files to our API. But it's also really useful to know how to post an audio file to a backend server in case you ever find yourself needing to do that. So I thought I would introduce a simple way for Node developers to take an audio file that is uploaded through the browser and send it to a backend Express.js server.

## Express Server

Let's start on the backend with our Express.js server. Express.js is a Node.js framework that provides us with so many useful methods and middleware, making working in Node that much easier.

We'll set up the server and implement a middleware package called Multer that helps us handle different file types that we receive to our post endpoint.

### Get the Server Running

We can start our project by going into the terminal and making a new node project. Here's a reminder of how you would get that started:

```bash
mkdir project-name
cd project-name
npm init
```

If you want to set up a basic Express server, I go over step-by-step how to do that in [this post](https://dev.to/sandrarodgers/basic-express-server-using-replitcom-2ba9). We'll use that basic server code to get us started. In your project folder, create a file where you can place this code. The standard is to use `app.js` as your file where you put your server.

```js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
  res.json('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

You see that we already have a GET endpoint where it says `app.get`. However, we don't want to just send out data from our server to the front end, we want to be able to *receive* an audio file to our server on the backend. So we will set up a POST endpoint to receive a data object sent from the client. Your most basic POST endpoint might look something like this:

```js
app.post('/test', (req, res, err) => {
  console.log(req.body)
  res.json('Successful post')
})
```

A post endpoint expects a **request body** sent to it from the client-side. (When that data comes through to the server, you can see the data object in your terminal if you `console.log` the req.body like I did in the example). The format of that data sent in the request body (which is a set of key value pairs) will determine how you deal with the data you have been sent. **A post request using fetch on the client-side might send you a string, a Form Data object, a Blob (for binary data), or URL Search Parameters.**

You're probably more familiar with data being sent as a JSON encoded string, but since we want to send an audio file, we have to prepare for a different kind of data than JSON. On the front end (which we'll build in the next section), we intend to send the audio file by way of an HTML form, so **we can expect that the data we will be receiving at our server will come in as Form Data** (with a content-type of form/multipart). This [tutorial](https://javascript.info/fetch#post-requests) has all the info you need if you want to read more about fetch post requests and the different data types.

Now, we could parse the raw data of the sound file ourselves (which would require a bunch of code and would probably make us feel very accomplished when we finally manage to get it working), or we could take advantage of the beauty of Node and use a tool that has already been made to help us with this immense task. There are [plenty of packages](https://npm.io/search/keyword:form-data) to choose from to help us handle Form Data, but since we are using Express, a great choice is [Multer](http://expressjs.com/en/resources/middleware/multer.html).

### Multer

Multer is a node.js middleware for handling multipart/form-data. If you're familiar with [body-parser](https://www.npmjs.com/package/body-parser), Multer is similar, except it is built only to deal with multipart bodies.

To use middleware in Express, we must bring in the package using `require`. We will also want to configure Multer for our needs, and we want to make sure that the audio file we are receiving actually gets written to the disk rather than just stored in memory. So we will include an options object like so `const upload = multer({opts})`, with 'opts' being the specific options for our configuration. **If you do not use the options object, multer will write the file to memory, so make sure you use the options object if you want your file stored on your disk.**

```js
const multer = require('multer')
const upload = multer({ storage })
```

Right now, that storage property doesn't have anything behind it. It's an empty variable. But I'm going to show you how I configure that storage option.

```js
const multer = require('multer')

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    console.log('filename')
    cb(null, file.originalname)
  },
  destination: function (req, file, cb) {
    console.log('storage')
    cb(null, './uploads')
  },
})

const upload = multer({ storage })
```

As you can see, I want to configure *how* we store the file. Using this `storage` option lets us use the Multer [disk storage engine](https://github.com/expressjs/multer#storage), which basically lets us program **how we want the file to be named** (using the disk storage `filename` method) and **where we wanted it to be stored** (using the disk storage `destination` method) . You can see in my code that I'm choosing to name the file exactly what it was named originally when it was sent to us from the client-side, and I am choosing to store it in a folder called `/uploads`.

Now I will write out my post endpoint. It will include the Multer upload middleware. Since we are only uploading one file, I am using `upload.single()` but if you want to upload multiple files, Multer also has the `upload.array()` method. Multer adds a **request file** object which contains the file, and a **request body** object which contains the values of the text fields of the form.

```js
app.post('/upload_files', upload.single('file'), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  res.send({ message: 'Successfully uploaded files' })
})
```

One crucial thing to be sure of is that the parameter you include in the method (in this case, "file" in `upload.single("file")` must correspond to the name field in your HTML form file input. According to the [Multer](https://github.com/expressjs/multer#usage) docs:

> It is important that you use the `name` field value from the form in your upload function. This tells multer which field on the request it should look for the files in. If these fields aren't the same in the HTML form and on your server, your upload will fail.

We will make sure those values correspond when we build our HTML form in the next section.

## HTML

Over to the front-end now. In your project, you can make an `index.html` file, or you can test this out in something like CodePen. I'll link to both my examples in CodePen so you have access to the working front-end code.

### Pure HTML (No Javascript)

The first example I want to show you is an HTML form that uses no Javascript.

```html
<form enctype="multipart/form-data" action="http://localhost:8080/upload_files" method="POST">
    <label for="file-upload">Select file:</label>
    <input id="file-upload" type="file" name="file"/>
 <input type="submit" value="POST to server"></input>
  </form>
```

The form tag must include the `enctype` attribute to identify the media, or MIME type. For Multer, you must use `enctype="multipart/form-data"`.

We also include the `action` attribute, which tells the form the url of the server and the endpoint. Since my server is running locally on port 8080 and my post endpoint path is `/upload_files`, I use the URL `http://localhost:8080/upload_files`. Lastly, we tell the form that the fetch method is `POST`.

Don't forget to include a `name=""` with the name field containing the parameter's name in the Multer upload method used in your Express server. See my working code at this [CodePen](https://codepen.io/sandrarodgers/pen/QWMQGXa?editors=1010).

### HTML and JS using a FormData object

A common need when sending a file is to include extra information with the file that you may want to use for some purpose on your backend, such as data you need to store along with the file. In that case, a way to do this is to use a Javascript FormData object. So in this example, I'll show you an HTML form that uses Javascript to include the FormData object. See my working code at this [CodePen](https://codepen.io/sandrarodgers/pen/XWazGem?editors=1011).

#### HTML

```html
<form>
  <label for="file">Select files</label>
  <input id="file" type="file" name="file" />
  <input type="submit" value="POST to server"></input>
</form>
```

We don't have to include the enctype attribute in the HTML form since that is already clear by it being a Form Data object we send in the Javascript. Also, the fetch post and URL/endpoint information are also included in the Javascript, so these are not needed in the HTML.

#### Javascript

```js
const form = document.querySelector('form')
const fileInput = document.getElementById('file')
let file

//input file upload gets the file we want to post:
handleAudioFile = (e) => {
  file = e.target.files
  for (let i = 0; i <= file.length - 1; i++) {
    file = file[i]
  }
}
fileInput.addEventListener('change', handleAudioFile)

//on clicking the submit button, we create the Form Data object, add the data value of the username to send as part of the request body and add the file to the object
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('username', 'Sandra Rodgers')
  formData.append('files', file)

  fetch('http://localhost:8080/upload_files', {
    method: 'post',
    body: formData,
  })
    .then((res) => console.log(res))
    .catch((err) => ('Error occurred', err))
})
```

The Form Data allows us to send more info as key-value pairs that we can pull from the req.body when it gets to the server. Add the `append("key", "value")` to the form data object for any information you want to add. There are [other methods](https://javascript.info/formdata) you can use to set up the Form Data object the way you want it.

When you click the submit button, you can go to the `/uploads` folder you set up and see that your file has arrived!

## Conclusion

Now you are able to use Multer to send files to your Express.js server. Try sending some audio files or even image files. This is a good starting point for taking those files and moving them to another storage place, such as your Cloudinary account or a database.

