/* ===============================================
   PARTICLES BACKGROUND
================================================ */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": { "enable": true, "value_area": 900 }
        },
        "color": { "value": "#00e5ff" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": {
            "value": 0.3,
            "random": true,
            "anim": { "enable": false }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00e5ff",
            "opacity": 0.25,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.2,
            "direction": "none",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "grab": {
                "distance": 180,
                "line_linked": { "opacity": 0.35 }
            },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});


/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const element = reveals[i];
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
            element.classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* Smooth scrolling for anchor links */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 40,
                behavior: "smooth"
            });
        }
    });
});
