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
// Filter certificates
function filterCert(category) {
    let cards = document.querySelectorAll(".cert-card");

    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else {
            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

// 3D tilt based on mouse movement
document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let centerX = rect.width / 2;
        let centerY = rect.height / 2;

        let rotateX = -(y - centerY) / 10;
        let rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});
