function menuAnimation() {
    
    var Menu = document.querySelector("#menu");
    var Closed = document.querySelector("#closed");
    var tl = gsap.timeline();

    tl.to(".navlinks", {
        top:0,
        duration:0.6
    })

    tl.pause()

    Menu.addEventListener("click", function(){
        tl.play()
    })

    Closed.addEventListener("click", function(){
        tl.reverse()
    })

}
menuAnimation()

function gsapAnimation() {
    
    var tl = gsap.timeline();

    tl.from(".video-background", {
        duration:1,
        opacity:0
    })
    tl.from("nav img, nav .navlink, nav .nav-btn, nav #menu", {
        y:-40,
        duration:1,
        opacity:0,
        stagger:0.15
    })
    tl.from(".hero-text h1", {
        y:-40,
        duration:1,
        opacity:0

    })
    tl.from(".hero-text p", {
        y:40,
        duration:1,
        opacity:0
    })
    tl.from(".hero-text .hero-btn", {
        duration:1,
        opacity:0
    })

}
gsapAnimation()