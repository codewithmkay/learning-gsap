//in the  below code, gsap.to is used to animate the element with the class "box" by 
// moving it 300 pixels to the right over a duration of 2 seconds using the GSAP 
//----------------------------------------------------------------------------------------------------
// LETS TRY GSAP TO

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
//----------------------------------------------------------------------------------------------------
// LETS TRY GSAP FROM


// gsap.from(".cat", {
//     x: 300,
//     duration: 2,
//     opacity: 0,
//     // scale: 0.5,
//     ease: "power3.out",
//     // rotation: -25,
//     delay: 0.5
// })


//----------------------------------------------------------------------------------------------------
//LETS TRY TIMELINE
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


// ------------------------------------------------------------------------------------------------------
// LETS TRY SCROLL 
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-box", {
    x: 300,
    duration: 10,
    opacity: 0,

    scrollTrigger:{
        trigger: ".scroll-box", // which element to trigger the animation
        // scrub: true, // animtion follows the scroll position
        start: "top 50%", // when the top of the trigger element is at 80% of the viewport height
        end: "top 20%", // when the top of the trigger element is at 20% of the viewport height
        // markers: true, // to show the start and end markers of the animation
        pin: true, // to pin the trigger element while the animation is running
        

        toggleActions : "play pause resume reset" // to control the animation based on the scroll position


      
    }

});
// Above GSAP is basically saying briefly 
// that when the element with the class "scroll-box" is scrolled into view, 
// it will animate by moving 300 pixels to the right over a duration of 2 seconds. 
// The ScrollTrigger plugin is used to create this scroll-based animation effect.

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".try",
        start: "top 80%",
        end: "top 20%",
        // scrub: true,
        markers: true,
    }
});
 tl.to(".try-box", {
    x:300,
    duration: 2,
 })
 .to(".try-box", {
    rotation: 360,
    duration: 2
 });