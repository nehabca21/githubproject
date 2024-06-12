var  menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");


var t1 = gsap.timeline()//{paused:true} it is used inside the timeline which is used to pause

t1.to("#full",{
    right:0,
    duration:0.6,
    ease:2
})

t1.from("#full h4",{
    x:150,
    duration:0.28,
    stagger:0.3,
    opacity:0
})

t1.from("#full i",{
    opacity:0
})

t1.pause()

menu.addEventListener("click",function(){
    t1.play()
})
cross.addEventListener("click",function(){
    t1.reverse()
})