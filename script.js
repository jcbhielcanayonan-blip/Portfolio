const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(button => button.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.filter;

    projects.forEach(project => {
      if (category === "all" || project.dataset.category === category) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});

projects.forEach(project => {
  project.addEventListener("click", () => {
    const title = project.dataset.title;
    alert(title + "\n\nReplace this placeholder with your actual design image.");
  });
});

function handleContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const project = document.getElementById("project").value;
  const message = document.getElementById("message").value;

  const yourEmail = "your@email.com";
  const subject = encodeURIComponent("Graphic Design Inquiry - " + project);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Project: " + project + "\n\n" +
    message
  );

  window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
  return false;
}
