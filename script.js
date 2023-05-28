const preloaderTl = gsap.timeline();

// "Loading" text and 3 dots intro animation
preloaderTl.to(".preloader__text--word, .preloader__text--dot", { 
    y: "0", 
    delay: 1,
    ease: "expo.out",
    duration: 1
})

preloaderTl.fromTo(".preloader__text--dot", { backgroundColor: "#a3a79a"}, {
    backgroundColor: "#111111",
    stagger: 0.15,
    repeat: -1,
    repeatDelay: .3,
    ease: "expo.inOut"
})


// 000 counter animation
preloaderTl.to(".counter__container1 .counter", { y: "0", ease: "expo.out", duration: 1 }, "<-1")

preloaderTl.to(".counter__container1 .counter", { 
    y: "150%", 
    stagger: {
        amount: 0.1,
        from: "end"
    }, 
    ease: "expo.inOut", 
    duration: 1.2
}, "-=.4")

preloaderTl.fromTo(".counter__container1", { 
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", 
}, {
    clipPath: "polygon(0 0, 100% 0, 100% 8%, 0 7%)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.2")


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


// 068 counter animation
preloaderTl.to(".counter__container3 .counter", { 
    y: "0", 
    ease: "expo.out", 
    stagger: {
        amount: 0.1,
        from: "end"
    },
    duration: 1 
}, "-=.95")

preloaderTl.fromTo(".counter__container3", { 
    clipPath: "polygon(0 98%, 100% 98%, 100% 100%, 0 100%)", 
}, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 1%, 0 1%)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.5")

preloaderTl.to(".counter__container3 .counter", { 
    y: "150%", 
    stagger: {
        amount: 0.1,
        from: "end"
    }, 
    ease: "expo.inOut", 
    duration: 1.2
}, )

preloaderTl.fromTo(".counter__container3", { 
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", 
}, {
    clipPath: "polygon(0 3%, 100% 2%, 100% 0, 0 0)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.3")


// 083 counter animation
preloaderTl.to(".counter__container4 .counter", { 
    y: "0", 
    ease: "expo.out", 
    stagger: {
        amount: 0.1,
        from: "end"
    },
    duration: 1 
}, "-=.95")

preloaderTl.fromTo(".counter__container4", { 
    clipPath: "polygon(0 98%, 100% 98%, 100% 100%, 0 100%)", 
}, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 1%, 0 1%)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.5")

preloaderTl.to(".counter__container4 .counter", { 
    y: "150%", 
    stagger: {
        amount: 0.1,
        from: "end"
    }, 
    ease: "expo.inOut", 
    duration: 1.2
}, )

preloaderTl.fromTo(".counter__container4", { 
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", 
}, {
    clipPath: "polygon(0 3%, 100% 2%, 100% 0, 0 0)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.3")

// 100 counter animation
preloaderTl.to(".counter__container5 .counter", { 
    y: "0", 
    ease: "expo.out", 
    stagger: {
        amount: 0.1,
        from: "end"
    },
    duration: 1 
}, "-=.95")

preloaderTl.fromTo(".counter__container5", { 
    clipPath: "polygon(0 98%, 100% 98%, 100% 100%, 0 100%)", 
}, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 1%, 0 1%)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.5")

preloaderTl.to(".counter__container5 .counter", { 
    y: "150%", 
    stagger: {
        amount: 0.1,
        from: "end"
    }, 
    ease: "expo.inOut", 
    duration: 1.2
}, )

preloaderTl.fromTo(".counter__container5", { 
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", 
}, {
    clipPath: "polygon(0 3%, 100% 2%, 100% 0, 0 0)",
    duration: 1.3,
    ease: "expo.inOut"
}, "-=1.3")


// Landing page animation
preloaderTl.to(".preloader__text--word, .preloader__text--dot", { 
    y: "150%", 
    delay: 1,
    ease: "expo.out",
    duration: 1
}, "-=1.9")

preloaderTl.to(".navigation .navigation__logo", {
    scale: 0.25,
    transformOrigin: "right top",
    ease: "expo.inOut",
    duration: 1
}, "-=1.2")

preloaderTl.to(".preloader", { opacity: 0 }, "-=.4")

preloaderTl.to(".footer__heading--text .inner__text, .footer__heading--two .inner__content", {
    y: 0,
    ease: "expo.out",
    duration: 1.1
})

preloaderTl.to(".js__opacity", {
    opacity: 1,
    stagger: 0.1,
    ease: "expo.out",
    duration: 1
}, "-=.7")
