gsap.from(".gsap-anim h1", {
  transform: "translateX(-30%)",
  scrollTrigger: {
    trigger: ".gsap-anim",
    start: "top 0%",
    end: "bottom 25%",
    scrub: 2,
    pin: true,
    markers: false,
  },
});

var initPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var myStr = document.querySelector(".string");

myStr.addEventListener("mousemove", (dets) => {
  var bounds = myStr.getBoundingClientRect();
  var relativeY = dets.clientY - bounds.top;

  relativeY = Math.max(50, Math.min(relativeY + 40 , 150));
  initPath = `M 10 100 Q ${dets.x} ${relativeY * 1.2} 990 100`;

  gsap.to(".string svg path", {
    attr: { d: initPath },
    duration:1.5,
    ease:"power3.out"
  });
});
myStr.addEventListener("mouseleave",()=>{
  gsap.to(".string svg path", {
    attr: { d: finalPath },
    duration:0.5,
    ease:"elastic.out(1,0.2)"
  });
})