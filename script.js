function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const roles = ["Cloud Engineer", "DevOps Engineer", "SRE"];
const typingElement = document.getElementById('typing-effect');
const typingDelay = 100; // Delay between typing each character
const erasingDelay = 75; // Delay between erasing each character
const newTextDelay = 2000; // Delay before starting to type the next role

let roleIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        roleIndex++;
        if (roleIndex >= roles.length) roleIndex = 0;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (roles.length) setTimeout(type, newTextDelay);
});