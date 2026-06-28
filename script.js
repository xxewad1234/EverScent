const sections = document.querySelectorAll("section");

const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();

// Select all nav links
const navLinks = document.querySelectorAll(".nav-links a");

// Add click effect
navLinks.forEach(link => {
    link.addEventListener("click", function () {

        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove("active"));

        // Add active class to clicked link
        this.classList.add("active");
    });
});