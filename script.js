//in the  below code, gsap.to is used to animate the element with the class "box" by 
// moving it 300 pixels to the right over a duration of 2 seconds using the GSAP 



gsap.to(".box", {
    x:-300,
    duration: 2,
    opacity: 0,
    // rotation: 360,
    // scale : 2,
    // ease: "bounce.out",
    ease: "power3.out"
})



// in the below code, gsap.from is used to animate the element with the class "cat" by moving it 
// from 300 pixels to the right back to its original position over a duration of 2 seconds using the GSAP


gsap.from(".cat", {
    x: 300,
    duration: 2,
    opacity: 0,
    // scale: 0.5,
    ease: "power3.out",
    // rotation: -25,
    delay: 0.5
})


const tl = gsap.timeline();

tl.to(".bat", {
    x: 300,
    duration: 2,
    rotation: 360

});

tl.to(".rat", {
    x: 300,
    duration: 2,
    rotation: 360
});