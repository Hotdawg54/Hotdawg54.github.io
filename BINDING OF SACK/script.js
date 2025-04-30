// Contact form interactivity
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formMessage.textContent = "Thank you for your message! We'll get back to you soon.";
    contactForm.reset();
  });
}

// Example additional interactivity: nav link highlight on hover
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.1)";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});
