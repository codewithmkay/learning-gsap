const tl = gsap
  .timeline({
    repeat: -1,
    defaults:{ duration: 3, ease: 'power1.inOut' }
  })
  .set('#svg-stage', { opacity: 1 })
  .from('path', { drawSVG:'0% 0%' })
  .to('path', { drawSVG:'100% 100%' })
gsap.registerPlugin(DrawSVGPlugin);

const path = document.querySelector("#shape");
const title = document.querySelector("h1");

const tt = gsap.timeline({
repeat: -1,
repeatDelay: 1
});

tt
.set("#svg-stage", {
opacity: 1
})

.from(path, {
    drawSVG: "0%",
    duration: 3,
    ease: "power2.inOut"
})

.to(title, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
})

.to({}, {
    duration: 1
})

.to(title, {
    opacity: 0,
    y: -20,
    duration: 0.7,
    ease: "power2.in"
})

.to(path, {
    drawSVG: "0%",
    duration: 2,
    ease: "power2.inOut"
});