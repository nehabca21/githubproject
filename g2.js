var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

main.addEventListener("mousemove", function(a){
   /* console.log(a.y);*/

    gsap.to(cursor,{
        x:a.x,
        y:a.y,
        duration : 1,
       
    })
})

image.addEventListener("mouseenter",function(){
   // console.log("hiii");
    cursor.innerHTML = "View more";
    gsap.to(cursor,{
        scale:4,
        backgroundColor : "#ffffff8a"
    })
})

image.addEventListener("mouseleave",function(){
    //console.log("hello");
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor : "#fff"
    })
})