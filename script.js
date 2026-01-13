function toggleProjects(containerId, button) {
  const container = document.getElementById(containerId);
  const arrow = button.querySelector(".arrow");

  // Toggle the 'show' class
  container.classList.toggle("show");

  if (container.classList.contains("show")) {
    button.innerHTML = 'Show Less <span class="arrow rotated">▼</span>';
  } else {
    button.innerHTML = 'Show More <span class="arrow">▼</span>';
    // Optional: Scroll up to the start of the project section
    button.parentElement.previousElementSibling.previousElementSibling.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  // Toggles the 'open' class for the X animation
  hamburger.classList.toggle("open");

  // Toggles the 'active' class to show the menu
  navLinks.classList.toggle("active");
});
