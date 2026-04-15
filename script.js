// Typing effect
let text = ["CSE Student", "AI Enthusiast", "Future Developer"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
            j = 0;
        }
    }

    setTimeout(type, isDeleting ? 40 : 90);
}

type();

// Navbar toggle
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// Popup
function openPopup(text) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-text").innerText = text;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Cursor glow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 }
  }
});

// AOS
AOS.init({
    duration: 1000,
    once: true
});
// Certificate popup
function openCert(src) {
    document.getElementById("cert-popup").style.display = "block";
    document.getElementById("cert-preview").src = src;
}

function closeCert() {
    document.getElementById("cert-popup").style.display = "none";
}
