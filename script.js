/*gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1
})*/

/*gsap.to("#box2",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"red",
    borderRadius:"50%",
    scale:0.5
})

gsap.from("#box2",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"red",
    borderRadius:"50%",
    scale:0.5
})

gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    rotate:300,
    backgroundColor:"green",
    borderRadius:"40%",
    scale:0.4
})


gsap.from("h1",{
    opacity:0,
    duration:1,
    y: 30,
    delay:1,
    stagger:1
})

gsap.to("#box",{
    x:1300,
    duration:2,
    delay:2,
    rotate:360,
    scale:0.5,
    repeat:-1,
    yoyo:true
})*/



var t1 = gsap.timeline()

t1.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

t1.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})

t1.from("h1",{
    y:30,
    opacity:0,
    duration:0.5,
    scale: 0.3
    })