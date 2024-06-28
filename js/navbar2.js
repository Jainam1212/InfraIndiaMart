window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var links = document.querySelectorAll(".navbar .menu ul li a");
  var link1 = document.querySelector(".navbar .menu ul li.active a");
  if (window.scrollY > 10) {
    // Change 50 to the number of pixels you want to scroll before changing the background
    navbar.classList.add("scrolled");
    links.forEach(function (link) {
      link.style.color = "black";
    });
  } else {
    navbar.classList.remove("scrolled");
    links.forEach(function (link) {
      link.style.color = "rgba(255, 255, 255, 0.5)";
    });
    link1.style.color='white';
  }
});
