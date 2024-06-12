function page1aniation(){
    var t1 = gsap.timeline()

t1.from("nav h1,nav h4,nav button",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.8,
    stagger:0.15
})
t1.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
    
})
t1.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:0.4  
})
t1.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})
t1.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.7")

t1.from(".section1bottom img",{
        opacity:0,
        y:30,
        stagger:0.15,
        duration:0.6
})
}
function page2animation(){
    var t2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
          //  markers:true,
            start:"top 60%",
            end:"top -50",
            scrub:2
        }
        
    })
    
    t2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    t2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    t2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    t2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim")
    t2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim")
}
page1aniation();
page2animation();