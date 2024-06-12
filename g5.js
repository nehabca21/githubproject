function marqueeanimation(){
window.addEventListener("wheel",function(dets){
    //console.log(dets.deltaY)

    if(dets.deltaY>0){
        console.log("right scrolling");
        gsap.to(".marque",{
            transform:'translateX(-200%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".marque img",{
            rotate:180
        })
    }
    else{
        console.log("reverse scrolling");
        gsap.to(".marque",{
            transform:'translateX(0%)',
            duration:2,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".marque img",{
            rotate:0
        })
    }
})
}

marqueeanimation();

