

https://github.com/uzoway/animex-studio-landing-page/assets/73430874/cd8fc797-2590-49c9-a2e6-9787706bb331



# ANIMEX - Conceptual development for a creative studio website

This repo is for the development of the conceptual and animation design for a creative studio website made by [Alex Tkachev](https://twitter.com/simply_aalex) and [Willie](https://twitter.com/willie_ui) [here](https://twitter.com/simply_aalex/status/1661385253548687365). At first sight, I really admired the pageload animation and the layout of the landing page and so I decided to develop it.

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Approach](#approach)
- [Author](#author)

## Overview

## My process

### Built with

- HTML5
- CSS3
- JavaScript/GSAP

### Approach

To get the sequencing and timing right for the motion, I had to download the video to my system and watch it multiple times with a playback speed of 0.25. This is an approach I learnt from the awesome [Carl](https://twitter.com/snorklTV).
I started by creating a gsap timeline as so:
```js
const preloaderTl = gsap.timeline();

```
and added all the tweens to it. This makes sure that all tweens play in succession and makes relative and absolute positioning of tween in the playhead easy.
I split the counters animation (000, 037, 068, 083 & 100) into different tweens. This is well documented in the ***script.js*** file.

Below is a step by step process explaining the movement of a typical counter:
 
1. The three numbers get translated(Y) from -150% to 0. In a staggered formation starting from the end.
2. The clip path of the numbers container goes from bottom to top same time as the three numbers gets translated in 1.
3. The three numbers then gets translated(Y) from 0% to 150%. In a staggered formation starting from the end.
4. The clip path of the numbers container goes from top to bottom same time as the three numbers gets translated in 3.

Below is a code block showing the 037 counter animation
```js
// 037 counter animation
preloaderTl.to(".counter__container2 .counter", { 
    y: "0", 
    ease: "expo.out", 
    stagger: {
        amount: 0.1,
        from: "end"
    },
    duration: 1 
}, "-=.95")

preloaderTl.fromTo(".counter__container2", { 
    clipPath: "polygon(0 98%, 100% 98%, 100% 100%, 0 100%)", 
}, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 1%, 0 1%)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.5")

preloaderTl.to(".counter__container2 .counter", { 
    y: "150%", 
    stagger: {
        amount: 0.1,
        from: "end"
    }, 
    ease: "expo.inOut", 
    duration: 1.2
}, )

preloaderTl.fromTo(".counter__container2", { 
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", 
}, {
    clipPath: "polygon(0 3%, 100% 2%, 100% 0, 0 0)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.3")

```

After the completion of the counter, the loading text gets translated(Y) by a value of 150% and logo gets scaled down to 0.25. After that, the bold text and its image gets translated(Y) from 150% to 0% and every other content on the landing page goes from an initial opacity of 0 to 1 in a staggered formation.

## Author

- LinkedIn - [Uzochukwu Okafor](https://www.linkedin.com/in/uzochukwuokafor/)
- Twitter - [@uzoway_](https://twitter.com/Uzoway_)
