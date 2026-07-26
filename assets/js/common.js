document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("light-toggle");
  if (modeToggle) {
    modeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme(localStorage.getItem("theme"));
    });
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
});
