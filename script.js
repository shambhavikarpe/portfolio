// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;

        if (top > offset) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});

// Initial style
sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});