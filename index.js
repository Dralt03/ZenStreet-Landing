const scrollelement = document.getElementById("waitlist");

const handleScroll = () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 500) {
    scrollelement.style.display = "block";
  } else {
    scrollelement.style.display = "none";
  }
};

window.addEventListener("scroll", handleScroll);
