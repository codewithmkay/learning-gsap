//in the  below code, gsap.to is used to animate the element with the class "box" by 
// moving it 300 pixels to the right over a duration of 2 seconds using the GSAP 



gsap.to(".box", {
    x:300,
    duration: 2   
})

// gsap.to("ELEMENT", {
//     PROPERTY: VALUE,
//     duration: TIME
// });



// in the below code, gsap.from is used to animate the element with the class "cat" by moving it 
// from 300 pixels to the right back to its original position over a duration of 2 seconds using the GSAP


gsap.from(".cat", {
    x: 300,
    duration: 2
})

// gsap.from("ELEMENT", {
//     PROPERTY: VALUE,
//     duration: TIME
// });
