---
title: Playing With P5.js: Implementing Game Logic
description: In this post, we'll use P5.js to implement collision detection, manage entities with classes, and handle game state. Learn more now.
date: 2022-03-15
cover: https://res.cloudinary.com/deepgram/image/upload/v1646780523/blog/2022/03/p5js-game-logic/Playing-with-p5js%402x.jpg
authors:
    - kevin-lewis
category: tutorial
tags:
    - javascript,
    - creative-coding,
    - p5js,
    - beginner
seo:
    title: Playing With P5.js: Implementing Game Logic
    description: In this post, we'll use P5.js to implement collision detection, manage entities with classes, and handle game state. Learn more now.
shorturls:
    share: https://dpgr.am/ae99db
    twitter: https://dpgr.am/3c3921
    linkedin: https://dpgr.am/f8d9ea
    reddit: https://dpgr.am/02979b
    facebook: https://dpgr.am/1a8f8b
og:
    image: https://res.cloudinary.com/deepgram/image/upload/v1661454042/blog/p5js-game-logic/ograph.png
---

This is the second in a three-part series on P5.js (from here 'P5') - a creative coding library that makes working with the Canvas API much easier. [In part one](https://developers.deepgram.com/blog/2022/03/p5js-getting-started/), we covered how to draw elements on the screen and react to keyboard and mouse input.

Today, we're taking that theoretical knowledge and building some features you may need when creating a game. Then, in next week's final part, we will add voice functionality to our game using Deepgram.

## Collision Detection

Every element you draw in a P5 sketch has a specific placement and size. Collision detection in games lets you know when one element overlaps with another or touches a location such as a wall. This is often used to avoid users going through walls or floors or to 'pick up' items such as food or hearts.

Assuming a collision check between you (the 'player') and another entity (a 'pick up'), a collision detection relies on four conditional checks:

1.  Is your x position greater than the leftmost x position of the pickup?
2.  Is your x position less than the rightmost x position of the pickup?
3.  Is your y position greater than the topmost y position of the pickup?
4.  Is your y position less than the bottommost y position of the pickup?

Let's start putting this into practice. Create an `index.html` file, open it in your code editor, and add the following to it:

```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
    <script>
        const pickupX = 200
        const pickupY = 50
        const pickupSize = 100

        function setup() {
            createCanvas(500, 200)
        }

        function draw() {
            background(100)

            const collisionX = mouseX>pickupX && mouseX<pickupX+pickupSize
            const collisionY = mouseY>pickupY && mouseY<pickupY+pickupSize
            if(collisionX && collisionY) fill('green')
            else fill('red')

            square(pickupX, pickupY, pickupSize)
        }
    </script>
</body>
</html>
```

To see your sketch running, just double click the `index.html` file in your file explorer and it will open in your default browser. To see new changes once you save your code, refresh the browser.

![A gray canvas has a red square in the middle. When the mouse cursor touches the box, the square goes green.](https://res.cloudinary.com/deepgram/image/upload/v1646780525/blog/2022/03/p5js-game-logic/mouse-collision.gif)

If the player is bigger than a single pixel point, you need to offset the conditionals by the size of the player. Try this:

```js
const pickupX = 225
const pickupY = 75
const pickupSize = 50
const playerSize = 50

function setup() {
    createCanvas(500, 200)
}

function draw() {
    background(100)

    fill('black')
    square(pickupX, pickupY, pickupSize)

    const collisionX = mouseX>pickupX-pickupSize && mouseX<pickupX+pickupSize
    const collisionY = mouseY>pickupY-pickupSize && mouseY<pickupY+pickupSize
    if(collisionX && collisionY) fill('green')
    else fill('white')

    square(mouseX, mouseY, playerSize)
}
```

![On the bottom-right of the cursor is a white box which moves with the cursor. When it touches the box in the middle, the box goes green.](https://res.cloudinary.com/deepgram/image/upload/v1646780526/blog/2022/03/p5js-game-logic/square-collision.gif)

If you want to learn more about collision detection, check out [this lovely video](https://www.youtube.com/watch?v=uAfw-ko3kB8) by Dan Shiffman.

### Example: Blocking Walls

The P5-provided `width` and `height` variables are always set to the canvas values provided in `createCanvas()`. You can use these along with the collision detection conditionals above to ensure a user cannot navigate outside of the canvas.

Expanding on our keyboard user input introduction in [last week's post](https://developers.deepgram.com/blog/2022/03/p5js-getting-started/), try this:

```js
let playerX = 20
let playerY = 20
const playerSize = 10

function setup() {
    createCanvas(500, 200)
}

function draw() {
    background(100)

    if(keyIsPressed) {
        if(key == 'ArrowLeft') playerX -= 1
        if(key == 'ArrowRight') playerX += 1
        if(key == 'ArrowUp') playerY -= 1
        if(key == 'ArrowDown') playerY += 1
    }

    // Not allowing out-of-bounds values
    if(playerX < 0) playerX = 0
    if(playerX > width - playerSize) playerX = width - playerSize
    if(playerY < 0) playerY = 0
    if(playerY > height - playerSize) playerY = height - playerSize

    square(playerX, playerY, playerSize)
}
```

If a player attempts to set `playerX` or `playerY` outside of the allowed bounds, they are set at the bounds. This means a player will see their square stop moving.

## Entity Management

Games often have many entities: players, enemies, and items. Entities of the same category likely have similar logic but need to maintain their own state. In P5 sketches, it's common to use JavaScript classes for game entity management. Classes provide a blueprint for an object. They have their own properties, including data and functions (called 'methods' in a class). Try this code, and then we'll walk through it:

```js
const bubbles = []

function setup() {
    createCanvas(500, 200)
    for(let i = 0; i < 100; i++) {
        bubbles.push(new Bubble(250, 100))
    }
}

function draw() {
    background(100)
    for(let bubble of bubbles) {
        bubble.move()
        bubble.display()
    }
}

class Bubble {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.xOff = random(0, 1000)
        this.yOff = random(0, 1000)
    }

    move() {
        this.xOff += 0.01
        this.yOff += 0.01

        this.x = noise(this.xOff) * width
        this.y = noise(this.yOff) * height
    }

    display() {
        circle(this.x, this.y, 5)
    }
}
```

![On a gray canvas, 100 small white circles move around.](https://res.cloudinary.com/deepgram/image/upload/v1646780529/blog/2022/03/p5js-game-logic/perlin.gif)

Starting at the bottom with the `Bubble` class. When a new class instance is created, it expects a starting x and y value, which is made available inside of the class as member properties called `this.x` and `this.y`. Two other member properties are also created - `xOff` (x offset) and `yOff` (y offset). More on these later.

This class has two methods - you can name methods whatever you want, but `move` and `display` are common in P5 sketches.

The `move()` method uses the P5-provided `noise()` function to return a value in a Perlin noise sequence. Perlin noise generates a random value that exists in a more natural-looking sequence - by very slightly modifying the value passed into `noise()`, the bubbles look to follow a 'path.' The small changes in `xOff` and `yOff` are used to move the bubbles smoothly. Perlin noise is fascinating, and I encourage you to [read more about `noise()`](https://p5js.org/reference/#/p5/noise).

The `display()` method draws a circle at the new values stored in `this.x` and `this.y`.

During `setup()`, 100 `Bubble` instances are created with a starting position of `(250, 100)` and stored in the `bubbles` array. Every `draw()`, each `bubble` has it's `move()` and `display()` methods run.

The next example combines collision detection and entity management:

```js
const bubbles = []

function setup() {
    createCanvas(500, 200)
    frameRate(10)
    for(let i = 0; i < 10; i++) {
        bubbles.push(new Bubble(250, 100))
    }
}

function draw() {
    background(100)
    for(let bubble of bubbles) {
        bubble.move()
        bubble.checkIfTouched()
        bubble.display()
    }
}

class Bubble {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.xOff = random(0, 1000)
        this.yOff = random(0, 1000)

        this.radius = 10
        this.touched = false
    }

    move() {
        this.xOff += 0.01
        this.yOff += 0.01

        this.x = noise(this.xOff) * width
        this.y = noise(this.yOff) * height
    }

    checkIfTouched() {
        const d = dist(mouseX, mouseY, this.x, this.y)
        if(d < this.radius) {
            this.touched = true
        }
    }

    display() {
        if(this.touched) fill('green')
        else fill('white')
        circle(this.x, this.y, this.radius * 2)
    }
}
```

What's changed?

1.  The `frameRate(10)` function in `setup()` drastically slows down the rate at which `draw()` is run from about 60 times per second to 10. This is only done to make this game playable.
2.  There are only ten instances of `Bubble` created instead of 100.
3.  Two new properties are now included in `Bubble` - `radius` and `touched`. The `radius` is used in the collision detection and when drawing the bubble.
4.  A new `checkifTouched()` method is included in `Bubble`. This method determines the distance (`dist()`) between the mouse position and the bubble center (x, y). If it is less than the radius, you know a collision has taken place and set `this.touched` to `true`.
5.  The color of the bubble changed once touched.
6.  The `checkIfTouched()` method is called for every bubble in `draw()`.

![10 larger white circles move around the canvas. When the cursor touches them, they turn green permanently.](https://res.cloudinary.com/deepgram/image/upload/v1646780526/blog/2022/03/p5js-game-logic/dist.gif)

## Keeping Score

Currently, every bubble currently tracks its own state, but there is no global indication of how a player has scored. This can be implemented with a global variable. Follow these steps:

1.  Add a global variable called `score` with a value of `0`.
2.  Inside of the `Bubble.checkIfTouched()` method, before `this.touched` is set to `true`, check if `this.touched` is still false, and then  also increment `score`.
3.  In the `draw()` function, set the color to white using `fill('white')`, and then display the `score` by using `text()`.

In case you don't remember the parameters for `text()` that we went over in the previous post, `text()` takes three arguments - the text to display, and the (x,y) coordinates.

For step 2, the additional check is required to stop `score` incrementing more than once. If successful, your sketch should function like this:

![When circles are hovered over, they go green and a number in the top-left goes up by 1.](https://res.cloudinary.com/deepgram/image/upload/v1646780526/blog/2022/03/p5js-game-logic/score.gif)

## Starting, Winning, and Losing

Most games have a number of states - a landing page on load, the game itself, and an endgame. This state can often be held in global scope, and code that runs in `draw()` can be altered as a result. Leaving your `Bubble` class unchanged, try this to implement game state management:

```js
const bubbles = []
let score = 0
let win = false

function setup() {
    createCanvas(500, 200)
    frameRate(10)
    for(let i = 0; i < 3; i++) {
        bubbles.push(new Bubble(250, 100))
    }
}

function draw() {
    background(100)

    if(score >= 3) win = true

    if(!win) {
        for(let bubble of bubbles) {
            bubble.move()
            bubble.checkIfTouched()
            bubble.display()
        }
        fill('white')
        text(score, 10, 20)
    } else {
        textSize(36)
        textAlign(CENTER)
        text('You Win!', width/2, height/2-16)
    }
}
```

The `win` variable starts as false, and when the `score` reaches three or more, the game logic stops running, and the text 'You Win!' will be shown instead.

This is a simplistic example, but the same approach can be taken to implement more game states.

![3 white circles move on the canvas. When the mouse cursor touches them they go green and the score goes up by one. When all 3 are green, the game ends and the text "You win" is displayed on the screen.](https://res.cloudinary.com/deepgram/image/upload/v1646780525/blog/2022/03/p5js-game-logic/win.gif)

## In Summary

Together with the first post in this series, I hope you have the tools you need to build a fun game with P5.js with these game logic implementations. For further inspiration, here are some of my favorite P5 examples:

*   [Particles in a flow field](https://openprocessing.org/sketch/1245844) - this example uses perlin noise in a way which may help further illustrate how it works.
*   [A game of snake](https://p5js.org/examples/interaction-snake-game.html)
*   [Full 2D platformer game](https://editor.p5js.org/L0808866/sketches/lvURvk4QN)
*   [A kaleidoscope drawing program](https://p5js.org/examples/interaction-kaleidoscope.html)
*   [Interactive artwork with animated interactive stars](https://openprocessing.org/sketch/570102)
*   [A generative painting program](https://p5js.org/examples/hello-p5-drawing.html)
*   [John Conway's Game of Life cellular automata](https://p5js.org/examples/simulate-game-of-life.html)
*   [L-Systems generative art](https://p5js.org/examples/simulate-l-systems.html)
*   [Applying realistic forces like gravity](https://p5js.org/examples/simulate-forces.html)
*   [Rainbow meatballs shader](https://openprocessing.org/sketch/838276) - this involved writing a shader which is an advanced topic but it looks extremely cool.

Next week in the third and final part of this series, we'll cover how to integrate voice into your P5 sketches. Until then, please feel free to reach out to us on Twitter at [@DeepgramDevs](https://twitter.com/DeepgramDevs) if you have any questions or thoughts.

