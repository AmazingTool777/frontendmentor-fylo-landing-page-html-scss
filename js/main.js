import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

// GSAP plugins setup
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// Hero section animations timeline
const heroTl = gsap.timeline({
  delay: 0.3,
});
heroTl.to(".hero__illustration", {
  duration: 0.7,
  opacity: 1,
  translateY: 0,
});
heroTl.to(".hero__heading", {
  duration: 0,
  text: "",
  onComplete() {
    gsap.to(".hero__heading", {
      duration: 1,
      text: {
        value: "All your files in one secure location, accessible anywhere.",
        delimiter: " ",
      },
    });
  },
});
heroTl.from(".hero__text", {
  delay: 1,
  duration: 0.5,
  opacity: 0,
  scale: 0.8,
});
heroTl.from(".hero__cta", {
  duration: 0.5,
  opacity: 0,
  scale: 0.8,
  ease: "elastic.out(1,0.3)",
});

// Features articles animation
gsap.to(".feature", {
  scrollTrigger: {
    trigger: ".features",
    start: "center bottom",
  },
  duration: 1,
  ease: "elastic.out(1,0.3)",
  stagger: 0.25,
  opacity: 1,
  scale: 1,
});

// How it works article animations timeline
const howItWorksTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-works img",
    toggleActions: "play none none none",
    start: "center bottom",
  },
});
howItWorksTl.to(".how-it-works__illustration", {
  duration: 0.3,
  opacity: 1,
  translateX: 0,
});
howItWorksTl.add(() => {
  const tl = gsap.timeline();
  const tweenVars = {
    duration: 0.16,
    opacity: 1,
    translateX: 0,
  };
  tl.to(".how-it-works__heading", tweenVars)
    .to(".how-it-works__description", tweenVars)
    .to(".how-it-works__cta", tweenVars);
  return tl;
});

// Testimonials animations
gsap.utils.toArray(".testimonial").forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "center bottom",
    },
    opacity: 1,
    rotateZ: 0,
    translateY: 0,
  });
});

// Get early access form animation
gsap.to(".get-early-access", {
  scrollTrigger: {
    trigger: ".get-early-access",
    start: "top center",
  },
  duration: 0.5,
  opacity: 1,
  translateY: 0,
  scale: 1,
  ease: "elastic.out(1,0.3)",
});
