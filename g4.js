function breakthetext(){
var h1 = document.querySelector("h1")
var h1text = h1.textContent
//console.log(h1text)
var splittext = h1text.split("")
//console.log(splittext);

var clutter = ""
var halfvalue =  Math.floor(splittext.length/2)

splittext.forEach(function(e,idx){
        if(idx<halfvalue)
            {
                console.log(e);
                clutter += `<span class = "a">${e}</span>`
            }
        else{
            clutter += `<span class = "b">${e}</span>`
            }

   // console.log("hello");
//clutter = clutter + e;


})

h1.innerHTML = clutter
}

breakthetext();

gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger: 0.15
})

gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger: -0.15
})
