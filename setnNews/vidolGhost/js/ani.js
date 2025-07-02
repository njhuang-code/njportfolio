gsap.registerPlugin(ScrollTrigger);

const mainGhost = document.querySelectorAll('.ghost');
const prizeBlock = document.querySelectorAll('.prize-block ul li');
const gameRule = document.querySelectorAll('.declare');
const stepVidol = document.querySelectorAll('.step1');
const stepGhost = document.querySelectorAll('.step2');
const stepQA = document.querySelectorAll('.step3');
const stepList = document.querySelectorAll('.step4');

let ghost = gsap.timeline()
let prize = gsap.timeline()
let rule = gsap.timeline()
let stepA = gsap.timeline()
let stepB = gsap.timeline()
let stepC = gsap.timeline()
let stepD = gsap.timeline()




ScrollTrigger.matchMedia({
  "(min-width: 960px)": () => { 
      // Ghost
      ScrollTrigger.create({
      animation:ghost,
      trigger:mainGhost,
      start:'10% 25%',
      end:'bottom 50%',

      markers:true
    })
    ghost.to(mainGhost,{y:100,opacity:0,duration:1,})

    ScrollTrigger.create({
        animation:prize,
        trigger:mainGhost,
        start:'top 30%',
        scrub:1,
    })
    prize.from(prizeBlock,{y:100,opacity:0,duration:1,})

    ScrollTrigger.create({
      animation:rule,
      trigger:prizeBlock,
      start:'top 30%',
      scrub:1,
    })
    rule.from(gameRule,{y:100,opacity:0,duration:1,})

    ScrollTrigger.create({
      animation:stepA,
      trigger:prizeBlock,
      start:'top 50%',
      scrub:1,
    })
    stepA.from(stepVidol,{y:100,opacity:0,duration:1},'+=.8')

    ScrollTrigger.create({
      animation:stepB,
      trigger:prizeBlock,
      start:'top 50%',
      scrub:1,
    })
    stepB.from(stepGhost,{y:100,opacity:0,duration:1},'+=1.2')

    ScrollTrigger.create({
      animation:stepC,
      trigger:prizeBlock,
      start:'top 50%',
      scrub:1,
    })
    stepC.from(stepQA,{y:100,opacity:0,duration:1},'+=1.5')

    ScrollTrigger.create({
      animation:stepD,
      trigger:prizeBlock,
      start:'top 50%',
      scrub:1,
    })
    stepD.from(stepList,{y:100,opacity:0,duration:1},'+=1.8')
    },

// "(min-width: 768px)": () => { 執行內容 },
"all": () => { 
  ScrollTrigger.create({
    animation:ghost,
    trigger:mainGhost,
    start:'10% 25%',
    end:'bottom 50%',
    scrub:1,
  })
  ghost.to(mainGhost,{y:100,opacity:0,duration:1,})
  },
});