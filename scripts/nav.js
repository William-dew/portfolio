function initMenuAnimation() {
    const toggleButton = document.querySelector(".toggle");
    const menuTxt = document.getElementById("menuTxt");
    let isOpen = false;

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".website-content", {
        duration: 2,
        ease: "power4.inOut",
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        scale: 0.5,
    });

    timeline.to(".row", {
        duration: 3,
        left: "0%",
        ease: "power4.inOut",
        stagger: 0.1,
    }, "-=2.5");

    toggleButton.addEventListener("click", function() {
        if (isOpen) {
            timeline.reverse();
            console.log("1");
            menuTxt.innerText = "Menu";
        } else {
            timeline.play();
            console.log("2");
            menuTxt.innerText = "Fermez";
        }

        isOpen = !isOpen;
    })

    const nav = document.querySelector("nav");
    const row = document.getElementsByClassName("row");
    const backMenu = document.querySelector(".menu");
    window.addEventListener("scroll", function() {
        let h = window.scrollY;
        nav.style.top = h + "px";
        h+=50;
        backMenu.style.position = "absolute";
        backMenu.style.top = h + "px";
        
    })
};
document.addEventListener("DOMContentLoaded", initMenuAnimation);
