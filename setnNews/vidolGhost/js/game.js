gsap.registerPlugin(ScrollTrigger);

let scrollPrizesection = gsap.timeline();
let scrollStepsection = gsap.timeline();
let scrollNotice = gsap.timeline();

ScrollTrigger.create({
  animation:scrollPrizesection,
  trigger:'.main-visual',
  start:'top 10%',
  scrub:1,
  toggleActions:'play complete none none'

})

scrollPrizesection.from('.prize-block ul li',{y:200,ease: "power2.inOut",opacity:0,duration:1,})

ScrollTrigger.create({
  animation:scrollStepsection,
  trigger:'.prize-block',
  start:'top top',
  end:'bottom bottom',
  scrub:3,
  toggleActions:'play complete none none'
})

scrollStepsection.from('.declare',{y:200,opacity:0,duration:3,},"+=1")
scrollStepsection.from('.step-block ul li',{y:200,opacity:0,duration:3,},"-=1")

ScrollTrigger.create({
  animation:scrollNotice,
  trigger:'.prize-block ul li',
  start:'top 10%',
  end:'bottom',
  scrub:2, 
})

scrollNotice.from('.notice-block ul',{y:200,opacity:0,duration:1,})