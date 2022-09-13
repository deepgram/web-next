---
title: "Start Chromium in Kiosk Mode on Raspberry Pi OS"
description: "Launch directly into a fullscreen browser on your Raspberry Pi"
date: 2022-01-19
cover: https://res.cloudinary.com/deepgram/image/upload/v1642519931/blog/2022/01/chromium-kiosk-pi/Pi.png
authors:
    - kevin-lewis
category: tutorial
tags:
    - raspberrypi
    - iot
seo:
    title: "Start Chromium in Kiosk Mode on Raspberry Pi OS"
    description: "Launch directly into a fullscreen browser on your Raspberry Pi"
shorturls:
    share: https://dpgr.am/f0d301c
    twitter: https://dpgr.am/3033ea8
    linkedin: https://dpgr.am/9cc98cb
    reddit: https://dpgr.am/47f10bd
    facebook: https://dpgr.am/70b90f5
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661453839/blog/chromium-kiosk-pi/ograph.png
---

<Alert type="info">This post is effectively part 2 on building and publishing npm packages. If you haven't read the first post, you can do so [here](https://sweet-pie-c52a63-blog.netlify.app/build-npm-packages/).</Alert>

Earlier this month [I built a wearable transcription device](https://twitter.com/_phzn/status/1478504862170161152) using Deepgram and a Raspberry Pi. The project is a web application running in a fullscreen browser on the Pi. However, when the device first starts, it requires a fiddly set of touchscreen interactions to get it in a ready state - opening the browser, navigating to the correct URL, and then fullscreening the browser. In this quick guide, I will show you the steps I took to automate this on device launch.

<Alert type="info">This tutorial works for Raspberry Pi OS 10 - Buster</Alert>

Open your terminal and type the following:

```bash
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```

This will open a new text file which will be executed when the desktop environment (LXDE) launches. In the file type the following:

    @lxpanel --profile LXDE-pi
    @pcmanfm --desktop --profile LXDE-pi

    @xset s off
    @xset -dpms
    @xset s noblank

    @chromium-browser --kiosk https://deepgram.com

Click **Control + X** to quit the app, and then **Y** to say 'yes' and save your file.

The first section sets up the environment and profile for the Pi, and the second section stops the Pi sleeping or starting the screensaver.

The final line is the most crucial - it starts Chromium (the built-in browser on which Google Chrome is based) in fullscreen mode at the specified URL. Kiosk mode also stops other user input outside of the browser - effectively locking the user into the browser.

I hope this helps you build web-based Raspberry Pi projects. If you have any questions, please feel free to reach out on Twitter - we're [@DeepgramDevs](https://twitter.com/DeepgramDevs).

        