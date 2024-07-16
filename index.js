document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const links = document.querySelector("./nav-feature");
  const button = document.getElementById("waitlist");

  const handleSectionChange = () => {
    const hash = window.location.hash;
    if (hash === "#section-2") {
      button.style.display = "block";
      navbar.style.background = "#0083a2";
    } else {
      button.style.display = "none";
    }
  };

  handleSectionChange();

  links.forEach((link) => {
    link.addEventListener("click", handleSectionChange);
  });

  window.addEventListener("hashchange", handleSectionChange);
});
