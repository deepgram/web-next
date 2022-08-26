---
title: "Getting Started with JSON"
description: "Learn the basics of JSON and how to work with data in a JSON object."
date: 2021-11-25
cover: https://res.cloudinary.com/deepgram/image/upload/v1637609299/blog/2021/11/getting-started-with-json/Getting-Started-with-json-blog%402x.jpg
authors:
    - sandra-rodgers
category: tutorial
tags:
    - nodejs
    - python
seo:
    title: "Getting Started with JSON"
    description: "Learn the basics of JSON and how to work with data in a JSON object."
shorturls:
    share: https://dpgr.am/93e1090
    twitter: https://dpgr.am/7dd0ca8
    linkedin: https://dpgr.am/1d55e1e
    reddit: https://dpgr.am/7daa083
    facebook: https://dpgr.am/840ab1c
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453805/blog/getting-started-with-json/ograph.png
---

JSON is a lightweight text-based notation used to represent structured data. While JSON was inspired by Javascript object notation, it is generally agnostic in how it works (more on that later) and can be used by many languages either natively or with the help of libraries.

In this post, we'll go over the basics you need to know to get you started working in JSON, and we'll dig a little deeper by examining how to take JSON from a Deepgram response object and find exactly the data we want.

## Meet JSON

Introductions usually start with names, so let's start there. JSON stands for Javascript Object Notation. JSON was originally pronounced like the name 'Jason', but over time, people started to pronounce it more like 'Jay-sawn'. The fact is, JSON is not opinionated, and neither is JSON's creator, Douglas Crockford, at least when it comes to pronunciation (comments in code... well, that's another story). In 2011 Crockford was quoted as saying: "There's a lot of argument about how you pronounce \[JSON], but I strictly don't care." So don't feel self-conscious about your pronunciation of JSON anymore (although you might want to rethink how you are saying "Babel").

### JSON Syntax

At the root level, JSON must be an array or an object (although [some discussion](https://stackoverflow.com/a/10428530/11073321) refers to changes that allow other data types at the root) . It is very common to see an object at the root like the following example, so we'll look closely at JSON that has an object at its root. Because it is an object, it will consist of data in the format of a **key** (the name of the thing we are setting) and a **value** (the actual data being set to that name).

Here is a JSON object representing Luke Skywalker (adapted from [The Star Wars API](https://swapi.dev/)). The basic structure is key-value pairs inside curly braces. **Notice that each key is wrapped in double quotes, which is an important feature of JSON.** Also, trailing commas are not allowed (which differs from Javascript).

```javascript
{
  "name": "Luke Skywalker",
  "height": 172,
  "mass": 77,
  "hair_color": "blond",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "Tatooine",
  "films": [
    "A New Hope",
    "Return of the Jedi",
    "The Empire Strikes Back",
    "Revenge of the Sith"
  ],
  "jedi_knight": true
}
```

Another important thing to know is that **JSON ignores whitespace between elements**. So we could use a property name of “hair color” as our key, but it’s not recommended since that can cause problems if we convert the data into a different language. It’s recommended to use an underscore between the elements, as in “hair\_color”. (However, the whitespace flexibility makes it very easy to beautify JSON to make it more human-readable.)

Also, **JSON does not allow comments**, which is one downside (in my opinion) because comments can be especially helpful in config files, where JSON is often used. The inventor of JSON made a purposeful choice not to allow for comments, and he has [defended his decision](https://archive.ph/20150704102718/https://plus.google.com/+DouglasCrockfordEsq/posts/RK8qyGVaGSr#selection-691.0-695.203).

### JSON Data Types

In the key-value pairs, the **value** can be of the following types: **string, number, object, array, Boolean, or null**. It can also be more complex if we nest data inside the objects or the arrays. For example, if I wanted to provide more information about each film Luke Skywalker appears in, I could change the value of `"films"` to be an array of objects, with each object containing key-value pairs with more data about each film (and I could continue on like this, having objects and arrays nested within objects and arrays).

```js
"films": [
   {
    "title": "A New Hope",
    "year": "1977"
   },
   {
    "title": "Return of the Jedi",
    "year": "1983"
   },
   {
    "title": "The Empire Strikes Back",
    "year": "1980"
   },
   {
    "title": "Revenge of the Sith",
    "year": "2005"
   },
  ],
```

And if you’re wondering about dates, **JSON does not have a specified date type**. However, Javascript uses ISO 8601 string format to encode dates as a string, and it is recommended that other languages convert the date to ISO format before converting the date to JSON.

So in Python, for example, we would use the `datetime` module to get the current date, and then use its method `isoformat()` to convert it to ISO format. Then use `json.dumps()` to convert the date to JSON.

**Python**

```py
import datetime
datetime = datetime.datetime.now()
formatted_datetime = datetime.isoformat()
json_datetime = json.dumps(formatted_datetime)
```

Finally, JSON is agnostic when it comes to numbers. While many languages have different number types and strict rules about numbers, JSON makes it easy. According to [Ecma International](https://www.ecma-international.org/wp-content/uploads/ECMA-404_1st_edition_october_2013.pdf), JSON "offers only the representation of numbers that humans use: a sequence of digits. All programming languages know how to make sense of digit sequences even if they disagree on internal representations." That's another reason JSON plays so well with other languages.

### Convert JSON to Other Languages

Since JSON is used for data representation and not for executing logic, we have to be able to convert it to the language of our choice if we want to do something more with it. Let's look at how two common languages - Node and Python - are converted to JSON and are able to parse JSON.

An important detail to understand is that while JSON uses object syntax to represent data structures, **JSON actually exists as a string**. So in the JavaScript example below, notice that when we convert Javascript to JSON, we **stringify** it, and when we convert it back to Javascript, we **parse** it ('parsing' means analyzing a string).

*Also good to know - a JSON string can be stored as a standalone file using the `.json` extension, and the official MIME type for JSON is "application/json", which is what we would use as the content-type in the headers object of a fetch request.*

#### Javascript

In Javascript, use the method `JSON.stringify()` to convert Javascript to JSON, and use `JSON.parse()` to convert JSON to JavaScript:

```js
const jedi = {
  name: 'Luke Skywalker',
  mass: 77,
  homeWorld: 'Tatooine',
}

const jediString = JSON.stringify(jedi)

console.log(jediString)
//JSON string "{"name":"Luke Skywalker","mass":77,"homeWorld":"Tatooine"}"

console.log(JSON.parse(jediString))
// Javascript object {name:"Luke Skywalker",mass:77,homeWorld:"Tatooine"}
```

#### Python

In Python, to convert a Python `dict` to JSON, you can import the built-in module json, and then use the method `json.dumps()` on the `dict`. And to convert JSON to a Python `dict`, use the method `json.loads()`:

```py
import json

# a Python object (dict):
jedi = {
  "name": "Luke Skywalker",
  "mass": 77,
  "home_world": "Tatooine"
}

jedi_string = json.dumps(jedi)

print(jedi_string)
# JSON string {"name": "Luke Skywalker", "mass": 77, "home_world": "Tatooine"}

print(json.loads(jedi_string))
# Python dict {'name': 'Luke Skywalker', 'mass': 77, 'home_world': 'Tatooine'}
```

## Find Specific Data in a Real JSON Object

A common, real-world scenario for encountering JSON would be if you were making a request to a third-party API. (Check out [this blog post](https://developers.deepgram.com/blog/2021/11/getting-started-with-apis/) to learn more about working with APIs).

For example, if you were to use the Deepgram API to transcribe audio, you would make a POST request that sends the audio file to Deepgram, and in response you would get your transcription of that audio file as text in the form of a JSON object.

It can be tricky to know what you are looking at when you get a response object from an API. It helps to read the documentation to find out what the structure is of the data being sent back to you. Deepgram's documentation tells us that the response schema will include a root object with two objects inside it:

*   a JSON-formatted '**metadata**' object
*   a JSON formatted '**results**' object.

So the general structure would look something like this (the ellipsis \[...] is included to show that some nested data has been hidden in the example):

```json
{
  "metadata": {
    "transaction_key": "lrCXFhkJPoTZ6Ezh9G24WabGcR5vMI/ksuSVtt1abe6abrr2+mGZb4CDTFGLedIxYUsI5MYvAEmDagh6AMEBFEyvC0qIF3YR5A31UMZkE4USmjWQSYyIukZxMtH9918TBLtUOvyeuTVeOcwdLUODqRA3uP67tF19eEKSza6Yj+IiQtib7yeHJWn5YzXPwX/5FOOQupKJoHz6dUH5lwjdhi9ykG6Nn87GDuZBzsejpEGsKJbzIgOQPJUrJTec09MDO95Bw9lj2cMPw1R/ZqBYbMtGvTamhopVl8XxV9Sg5blZkf8bs2KcRilYypQOvXggDGHLPxGNChBDFrvcR9Qi+eLLnEzPrHTsc6FjsFl/YgQ+Cw30RmpFiJceUXM2ed3/ojE5GLzsfSBeost4",
    "request_id": "eeaa1992-5729-4f2c-a73f-6224d78a47b8",
    "sha256": "8d2b4b8cc76cd35a5f9bde55ce92de211216849cca1407b1ad0d5d4d6ed610a2",
    "created": "2021-11-16T19:55:40.059Z",
    "duration": 24.696,
    "channels": 1,
    "models": [ "41757536-6114-494d-83fd-c2694524d80b" ]
  },
  "results": {
    "channels": [
      {
        "alternatives": [
          {
           "transcript": "This is the weapon of a jedi night, not as clumsy or random as a blast an elegant weapon. For all civilized day. Over a thousand generations, the Jedi knights the guardians of peace of justice in the old republic before the dark times before they can pass.",
            "confidence": 0.90745026,
            "words": [
              {
                "word": "this",
                "start": 0.65999997,
                "end": 0.78,
                "confidence": 0.9960715,
                "speaker": 0,
                "punctuated_word": "This"
              },
              ...
            ]
          }
        ]
      }
    ],
    "utterances": [
      {
        "start": 0.65999997,
        "end": 2.56,
        "confidence": 0.8840211,
        "channel": 0,
        "transcript": "This is the weapon of a jedi night,",
        "words": [
          {
            "word": "this",
            "start": 0.65999997,
            "end": 0.78,
            "confidence": 0.9960715,
            "speaker": 0,
            "punctuated_word": "This"
          }
          ...
        ],
        "speaker": 0,
        "id": "791ad5c3-b097-4ab3-b26f-5c0c8595c0e5"
      }
    ]
  }
}
```

### Show Only the Necessary Data from the Response

All we want is to get the **transcript** of the audio. (I recommend taking a look again at the above object to notice where that `transcript` data is.) But this response is giving me metadata and a whole bunch of other data, including individual words and data about those words! Really nice, but a little more than we need at the moment.

So we will drill down into that **results** object by chaining together the **keys (object level)** and the **indices (array level)**, following the chain down to the first `transcript` string. The way to do this is to assign the response from Deepgram to a variable called **response** (or whatever you want to call it), and then connect the keys and/or indices following this path:

*   The root-level **response** object
*   The **results** object
*   The first item in the **channels** array (index 0)
*   The first item in the **alternatives** array (index 0)
*   The **transcript** property

So it would use a chain similar to this general format:

      key -> key -> index0 -> index0 -> key
      [obj]  [obj]   [arr]     [arr]   [obj]

To see where this path takes us, we can print/log this chain of nested values. We should see just the value at the end of the chain, which is the transcript string. This would look similar in many languages, but let's take a look at it in Node and Python.

*Before continuing on, I challenge you to think to yourself how you would write out that chain of key names and indices so that you print only a response that is the transcript.*

MAKE YOUR GUESS NOW...

#### Answer: Node

To get just the transcript in Node, I could log the following code:

```javascript
response.results.channels[0].alternatives[0].transcript
```

#### Answer: Python

To get the transcript in Python, I could write the following code:

```python
response['results']['channels'][0]['alternatives'][0]['transcript']
```

And the response I would see is just the transcript:

    This is the weapon of a jedi night, not as clumsy or random as a blaster, an elegant weapon. For more civilized day. Over a thousand generations, the Jedi knights the guardians of peace of justice in the old republic before the dark times.

When comparing both languages, you can see that the way to get the data that you want is to understand how to access data from an object (use the **object property key**) and how to pull data from an array (use the **index of the position of the item in the array, starting with \[0]**). We chain these keys and indices together to get down to the data we need.

## Conclusion

I hope you learned a few interesting facts about JSON. Feel free to [reach out](https://twitter.com/sandra_rodgers_) with comments, questions, or any other tidbits worth knowing about JSON.

        