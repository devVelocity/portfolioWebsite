
// let boxV2 = gsap.timeline({
//     scrollTrigger:{
//         trigger: '.box-side-2',
//         scrub: 1,
//         start: '-700',
//         ease: 'sine.in',
//         end: '-300',
//     }
// })

// // const vh = (coef) => window.innerHeight * (coef/100);
// const vw = (coef) => window.innerWidth * (coef/100);

// boxV2.fromTo('.h1-scale',{opacity: 0, scaleX: 1, x:vw(-10)},{opacity:1,scaleX: 1,x:0,stagger:1.2})
// boxV2.fromTo('.title-container',{opacity: 0, scaleX: 1, x:vw(-5)},{opacity:1,scaleX: 1,x:0,stagger:1.2},"<")
// boxV2.fromTo('.h1-nonscale',{opacity: -5,scaleX: 3, x:vw(-5)},{opacity:1,x:0,scaleX: 1,stagger:1.2},"<")



// let boxContentTl = gsap.timeline({
//     scrollTrigger:{
//         trigger: '.box-content',
//         scrub: 1,
//         start: '-500',
//         ease: 'sine.in',
//         end: '-300'
//     },
// })

// boxContentTl.from('.box-content', {duration: 1, opacity: 0 , x:-50,stagger:1.2}, "<")





var htmlLevel = "90%"
var cssLevel = "70%"
var javascriptLevel = "55%"
var vueJSLevel = "50%"
var typescriptLevel = "65%"
var tailwindLevel = "35%"

let percbar = gsap.timeline({
    scrollTrigger: {
        trigger: '.item',
        scrub: 1,
        start: '-600',
        end: '-500',
        ease: 'sine.in'
    },
})


percbar.fromTo('#htmlbar', { duration: 1, width: 0 }, { width: htmlLevel })
percbar.fromTo('#cssbar', { duration: 1, width: 0 }, { width: cssLevel })
percbar.fromTo('#javascriptbar', { duration: 1, width: 0 }, { width: javascriptLevel })
percbar.fromTo('#vuejsbar', { duration: 1, width: 0 }, { width: vueJSLevel })
percbar.fromTo('#typescriptbar', { duration: 1, width: 0 }, { width: typescriptLevel })
percbar.fromTo('#tailwindbar', { duration: 1, width: 0 }, { width: tailwindLevel })


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#scrollable-intro-background',
        scrub: 1,
        pin: true,
        end: "bottom bottom"
    },

})

const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");

if (!motionMatchMedia.matches) {
    tl.fromTo("#scrollable-intro-background", { duration: 5, x: 0, scaleX: 20, scaleY: 20, rotation: 180 }, { duration: 10, scaleX: 10, scaleY: 10, x: -500, y: 1500, rotation: 60 })
    tl.fromTo("#scrollable-text", { duration: 3, x: -200, opacity: 0, autoAlpha: 0 }, { duration: 4, x: 0, opacity: 1 }, "<")
    tl.fromTo("#introtext0", { duration: 1.5, opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0 }, ">")
    tl.fromTo("#introtext1", { duration: 1.5, opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0 }, ">")
    tl.fromTo("#introtext2", { duration: 1.5, opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0 }, ">")
    tl.fromTo("#introtext3", { duration: 1.5, opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0 }, ">")
    tl.fromTo("#introtext4", { duration: 1.5, opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0 }, ">")
    tl.fromTo("#scrollable-intro-background", { duration: 3, scaleX: 2, scaleY: 2 }, { duration: 1.5, x: 50, y: -800, rotation: 40 })
    tl.to("#scrollable-text", { duration: 3, opacity: 0, autoAlpha: 0 },)
    tl.to("#scrollable-intro-background", { duration: 1, opacity: 1 })
} else {
    gsap.to("#scrollable-intro-background", { duration: 0, scaleX: 10, scaleY: 10, x: -500, y: 1500, rotation: 60 })
    tl.to("#scrollable-text", { duration: 1.5, opacity: 0, autoAlpha: 0 }, "<")
}

let tlSkillsLine = gsap.timeline({
    scrollTrigger: {
        trigger: '.existing-line',
        scrub: 0.3,
        start: 'top center',
        end: '+300'
    },
})

tlSkillsLine.fromTo("#skills-line-animated", { height: "0%" }, { height: '100%' })

let footeritems = gsap.timeline({
    scrollTrigger:{
        trigger: "#footeranchor",
        start: "bottom bottom",
        end: "+300",
        ease: 'expo.in',

    }
})

footeritems.fromTo('.footer-flex-el',{y:50,opacity:0},{y:0,opacity:1,stagger:0.5,duration: 1})


let footermadewith = gsap.timeline({
    scrollTrigger:{
        trigger: "#footeranchor",
        start: "bottom bottom",
        end: "+300",
        ease: 'expo.in',

    }
})

footermadewith.fromTo('.footer-madewith-liitem',{x:-100,opacity:0},{x:0, opacity: 1,stagger: 0.3,duration:0.5},"<")

let aboutmein = gsap.timeline({
    scrollTrigger:{
        trigger: "#aboutme",
        start: "center center",
        end: "+300",
        ease: 'expo.in',
    }
})

aboutmein.fromTo('.about-me-el',{x:-100,opacity:0},{x:0,opacity:1, stagger:0.3, duration: 1})

let skillsContainerIn = gsap.timeline({
    scrollTrigger:{
        trigger: "#skills",
        start: "center center",
        end: "+300",
        ease: 'expo.in',

    }
})

skillsContainerIn.fromTo('.skills-container-box',{y:100,opacity:0},{y:0,opacity:1, stagger:0.3, duration: 1})


gsap.fromTo('#center-blob',{x:200,opacity:0},{x:0,opacity:1,duration:3})
gsap.fromTo('#left-blob',{x:-200,opacity:0},{x:0,opacity:1,duration:3},"<")
gsap.fromTo('#intro-banner-content',{y:200,opacity:0},{y:0,opacity:1,duration:3},"<")


let blogIn = gsap.timeline({
    scrollTrigger:{
        trigger: "#blog-container-frame",
        start: "top bottom",
        end: "+300",
        ease: 'expo.in',

    }
})

blogIn.fromTo('#blog-container-frame',{y:50,opacity:0},{y:0,opacity:1,duration:2})