---
title: Virtual Environments in Python
description: Learn about why it's important to use virtual environments in Python, how to create one and use them in your next project.
date: 2022-02-14
cover: https://res.cloudinary.com/deepgram/image/upload/v1644600894/blog/2022/02/python-virtual-environments/Setting-Up-Your-Python-Developer-Environment%402x.jpg
authors:
    - tonya-sims
category: tutorial
tags:
    - python,
    - virtual environments
seo:
    title: Virtual Environments in Python
    description: Learn about why it's important to use virtual environments in Python, how to create one and use them in your next project.
shorturls:
    share: https://dpgr.am/5ea203
    twitter: https://dpgr.am/c3ab82
    linkedin: https://dpgr.am/aac64e
    reddit: https://dpgr.am/36eac8
    facebook: https://dpgr.am/d25692
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453996/blog/python-virtual-environments/ograph.png
---

Imagine developing two Flask applications, one for your customer and the other for a personal project. Let’s say your customer uses Flask 1.1, and your other application uses Flask 2.0.

When you create your customer’s project directory and install Flask, you do the usual global systemwide installation from the terminal using `pip install Flask==1.1.4`. You start developing that application but let’s say you’d also like to spend some time working on your project. You create another project directory and run `pip install Flask==2.0.3`, which installs a later version of Flask.

You receive a message saying you have to fix a bug in your client’s code. You go into your customer’s project directory, make the bug fix, and run your tests. You receive an error message indicating that “Flask 2.0.3 is not installed.”

The problem with Pip is that you can only have one version of the package installed. It uninstalls the previous version and overwrites it with the newer version when installing a package.

You may be wondering how we solve this problem?

The answer is using virtual environments.

Heads up, if you want faster access to set up your virtual environment, scroll down to the **Quick Commands** section, otherwise keep reading to understand how virtual environments work.

## What are virtual environments?

When you install a package with Pip, it installs every package in the same folder. The best way to handle this is to temporarily install them in a different folder and let Python use that folder instead.

This example is a perfect use case for a virtual environment.

When you create a virtual environment, it makes a particular folder that includes Python binaries. You then must activate a virtual environment, which does two things. It directs Pip to install packages to the specific folder and lets Python use packages from that folder.

Let’s walk through how to create virtual environments in the next section.

## Create a Virtual Environment

There’s a built-in module in Python called **venv** that handles virtual environments.

To create a virtual environment, in your terminal, navigate to where you want your folder structure and make a directory like so:

    mkdir client_flask_app

Once you have your folder, change directories inside of that folder:

    cd client_flask_app

Then create the virtual environment (this assumes you’re using a Python 3 installation):

    python3 -m venv my_virtual_environment

Let’s break this down.

The `-m` says, “Hey, call that built-in Python venv module.” This `venv` takes one parameter, the name of the virtual environment, which is **my\_virtual\_environment**.

Now list the directories and files in your folder:

    ls

You should see the virtual environment you created, which is that special folder with many Python things inside!

![creating a virtual environment in Python](https://res.cloudinary.com/deepgram/image/upload/v1644610609/blog/2022/02/python-virtual-environments/python_virtual_environment_create.png)

*Tip! A more common convention is to name your virtual environment the same as the module venv. For example:*

    python3 -m venv venv

*The benefits to this approach are that it’s more obvious this is a folder for a virtual environment, and some of the code editors like VSCode and Pycharm will automatically recognize the folder and start using it in your project. You can give your virtual environment name an alias by passing in the - - prompt flag, so it’s easier to switch in between projects. This flag will change the name of the virtual environment without changing the folder name. An example would be:*

    python3 -m venv --prompt myclientapp venv

Let’s take a look inside your newly created virtual environment folder:

    cd my_virtual_environment

<!---->

    ls

You’ll see a bin folder inside of your virtual environment.

![Python virtual environment bin folder](https://res.cloudinary.com/deepgram/image/upload/v1644610726/blog/2022/02/python-virtual-environments/python_virtual_environment_bin.png)

Let’s change directories so we can look to see what it contains.

    cd bin

<!---->

    ls

You should see an **activate** script inside of the bin directory.

![Python virtual environment activate script](https://res.cloudinary.com/deepgram/image/upload/v1644610838/blog/2022/02/python-virtual-environments/python_virtual_environment_activate.png)

Since this is a bash script, you’ll have to use the `source` command to run it.

From this directory type:

    source activate

After the virtual environment is activated, your command-line prompt will change to the name of the virtual environment. This activation lets you know that this environment is now active and ready to be used as a virtual one.

![Python virtual environment activated](https://res.cloudinary.com/deepgram/image/upload/v1644610838/blog/2022/02/python-virtual-environments/python_virtual_environment_activated.png)

Now you can start installing your Python packages with Pip, and they’ll all be installed inside of that virtual environment as long as it’s activated.

## Using a Virtual Environment

Now that you’ve activated your virtual environment and it’s ready for use let’s quickly walk through how to work with it.

The first thing you want to do is make sure your virtual environment is activated. So navigate to your directory with the virtual folder and ensure it’s activated.

If you’re already in the client\_flask\_app directory and see your virtual environment folder, activate it by typing:

    source my_virtual_environment/bin/activate

Now you can install Python packages that will be installed inside this folder and won’t collide globally with any other installations.

Let’s check to see if we have anything installed in our environment by running this command:

    pip freeze

You shouldn’t see any output because we have no packages installed yet.

Now let’s install Flask by doing the following inside your virtual environment:

    pip install Flask

Flask will get installed, and if we list out our packages again, we should see something this time.

    pip freeze

![Python virtual environment pip freeze](https://res.cloudinary.com/deepgram/image/upload/v1644610897/blog/2022/02/python-virtual-environments/python_virtual_environment_pip_freeze.png)

The above is a list of all of our packages inside our virtual environment.

To turn off your virtual environment or deactivate it, you’ll need to type:

    deactivate

![Python virtual environment deactivated](https://res.cloudinary.com/deepgram/image/upload/v1644610897/blog/2022/02/python-virtual-environments/python_virtual_environment_deactivated.png)

That wraps up this article about virtual environments in Python. You can start using them in all of your projects and switching in between them.

There are a couple of things to remember. Make sure the environment is activated before you install your packages. You can name your virtual environment anything you’d like, but the recommended naming convention is using the name of the **venv** module like `python3 -m venv venv`. If this gets confusing, remember to use the `--prompt` flag to change the name of the virtual environment.

If you ever have any questions about this post, please feel free to reach out to us on Twitter [@deepgramdevs](https://twitter.com/DeepgramDevs). We’re happy to help!

## Quick Commands Creating and Activating a Virtual Environment

    mkdir [% NAME_OF_YOUR_DIRECTORY %]
    cd [% NAME_OF_YOUR_DIRECTORY %]
    python3 -m venv venv
    source venv/bin/activate

