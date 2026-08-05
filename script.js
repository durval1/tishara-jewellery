// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Header shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 40) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
  } else {
    header.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";
  }
});
