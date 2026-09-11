//in the  below code, gsap.to is used to animate the element with the class "box" by 
// moving it 300 pixels to the right over a duration of 2 seconds using the GSAP 



// gsap.to(".box", {
//     x:-300,
//     duration: 2,
//     opacity: 0,
//     // rotation: 360,
//     // scale : 2,
//     // ease: "bounce.out",
//     ease: "power3.out"
// })



// in the below code, gsap.from is used to animate the element with the class "cat" by moving it 
// from 300 pixels to the right back to its original position over a duration of 2 seconds using the GSAP


// gsap.from(".cat", {
//     x: 300,
//     duration: 2,
//     opacity: 0,
//     // scale: 0.5,
//     ease: "power3.out",
//     // rotation: -25,
//     delay: 0.5
// })



// const tl = gsap.timeline();

// tl.to(".bat", {
//     x: 300,
//     duration: 2,
//     rotation: 360

// })

// .to(".rat", {
//     x: 300,
//     duration: 4,
//     rotation: 360
// }, "<");

// // we use < in the above code to make the
//  second animation start at the same time as the first animation.  



// LETS TRY SCROLL 

gsap.registerPlugin(ScrollTrigger);



gsap.to(".scroll-box", {
    x: 300,
    duration: 2,

    scrollTrigger:{
        trigger: ".scroll-box", // which element to trigger the animation
        scrub: true, // to show the start and end of the animation
      
    }

});

// Above GSAP is basically saying briefly 
// that when the element with the class "scroll-box" is scrolled into view, 
// it will animate by moving 300 pixels to the right over a duration of 2 seconds. 
// The ScrollTrigger plugin is used to create this scroll-based animation effect.