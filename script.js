gsap.registerPlugin(ScrollTrigger);

// ========================================
// 1. NAVBAR ENTRANCE
// ========================================

gsap.from(".logo, .nav-links a", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: "power3.out"
});


// ========================================
// 2. HERO LOAD-IN
// ========================================

const heroTimeline = gsap.timeline({ delay: 0.2 });

heroTimeline
    .from(".hero-media img", { scale: 1.35, duration: 1.6, ease: "power3.out" })
    .from(".hero-small", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=1.1")
    .from(".hero h1", { y: 80, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.5")
    .from(".hero-text", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.6")
    .from(".hero-button", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
    .from(".scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.4");


// ========================================
// 3. HERO -> ABOUT PAGE TRANSITION
//    The hero is pinned (position: fixed) and its own spacer
//    gives room to scrub the image zoom + fade as About rises over it.
// ========================================

gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-spacer",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
})
    .to(".hero-media img", { scale: 1, ease: "none" }, 0)
    .to(".hero-overlay", { opacity: 1, ease: "none" }, 0)
    .to(".hero-content, .scroll-cue", { opacity: 0, y: -60, ease: "none" }, 0);


// ========================================
// 4. ABOUT SECTION — image wipe reveal
// ========================================

gsap.to(".about-image-mask", {
    clipPath: "inset(0% 0 0 0)",
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 65%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".about-copy .section-label", {
    x: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 60%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".about-copy h2, .about-copy p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 55%",
        toggleActions: "play none none reverse"
    }
});


// ========================================
// 5. PROJECTS — title + staggered image wipes
// ========================================

gsap.from(".projects .section-label, .projects h2", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".projects",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});

document.querySelectorAll(".project-card").forEach((card, i) => {

    const image = card.querySelector(".project-image");
    const info = card.querySelector(".project-info");

    gsap.timeline({
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    })
        .to(image, { clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power4.out" }, i * 0.12)
        .to(image.querySelector("img"), { scale: 1, duration: 1.2, ease: "power3.out" }, "<")
        .from(info, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.5");
});

document.querySelectorAll(".project-card").forEach((card) => {
    const img = card.querySelector("img");

    card.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.08, duration: 0.5, ease: "power2.out" });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
    });
});


// ========================================
// 6. CONTACT
// ========================================

gsap.from(".contact h2, .contact .hero-button", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});
