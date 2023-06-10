const imagesPath = "images/";

// Scroll To Top Button
const scrollButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? scrollButton.classList.add("active")
    : scrollButton.classList.remove("active");
});

scrollButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
