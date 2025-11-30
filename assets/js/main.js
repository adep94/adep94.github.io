/* =============================================
   LANGUAGE SYSTEM IT / EN
============================================= */

const translations = {

    "it": {
        "about_link": "Chi sono",
        "projects_link": "Progetti",
        "contact_link": "Contatti",

        "hero_title": "Andrea De Pisapia",
        "hero_subtitle": "Ingegnere Embedded & Control Systems",
        "hero_tagline": "FPGA Design · Sistemi Real-Time · Robotica · Controllo & Simulazione",
        "btn_projects": "I miei progetti",
        "btn_cv": "Scarica CV",

        "about_title": "Chi sono",
        "about_text": "Sono un ingegnere di sistemi embedded con esperienza in FPGA, controllo, modellazione e sistemi real-time.",
        
        "timeline_title": "Timeline",
        "skills_title": "Competenze",
        "contact_title": "Contatti",

        "form_name": "Nome",
        "form_email": "Email",
        "form_message": "Messaggio",
        "form_send": "Invia"
    },

    "en": {
        "about_link": "About Me",
        "projects_link": "Projects",
        "contact_link": "Contacts",

        "hero_title": "Andrea De Pisapia",
        "hero_subtitle": "Embedded & Control Systems Engineer",
        "hero_tagline": "FPGA Design · Real-Time Systems · Robotics · Simulation & Control",
        "btn_projects": "My Projects",
        "btn_cv": "Download CV",

        "about_title": "About Me",
        "about_text": "I am an embedded systems engineer experienced in FPGA design, control systems, modelling and real-time architectures.",
        
        "timeline_title": "Timeline",
        "skills_title": "Skills",
        "contact_title": "Contacts",

        "form_name": "Name",
        "form_email": "Email",
        "form_message": "Message",
        "form_send": "Send"
    }
};

function setLanguage(lang) {

    // Salva la lingua
    localStorage.setItem("lang", lang);

    // Aggiorna testo dinamico
    document.querySelectorAll("[data-lang-key]").forEach(el => {
        const key = el.getAttribute("data-lang-key");
        el.innerHTML = translations[lang][key];
    });

    // Aggiorna stile attivo
    document.getElementById("lang-it").classList.remove("lang-active");
    document.getElementById("lang-en").classList.remove("lang-active");

    document.getElementById("lang-" + lang).classList.add("lang-active");
}

// Carica lingua salvata (default = IT)
document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "it";
    setLanguage(lang);
});

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


/* =============================
   PROJECT MODALS
============================= */
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalExtra = document.getElementById("modal-extra");
const modalClose = document.querySelector(".modal-close");

function openProjectModal(title, description, extraHTML) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalExtra.innerHTML = extraHTML;
    modal.style.display = "flex";
}

modalClose.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
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
