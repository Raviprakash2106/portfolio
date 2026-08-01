// =======================
// Typing Effect
// =======================

const words = [
    "Software Engineer",
    "Frontend Developer",
    "Java Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
        
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(type, deleting ? 60 : 120);
}

type();


// =======================
// Fade Animation
// =======================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card,.project,.grid div,.contact").forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});


// =======================
// Active Navbar
// =======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =======================
// Extra CSS via JS
// =======================

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(60px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

.active{

color:#00d4ff !important;

}

`;

document.head.appendChild(style);