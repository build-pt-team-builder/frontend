let nav = document.querySelector("nav");
let mobileNav = document.querySelector(".mobile-nav");
let bars = document.querySelectorAll(".mobile-nav div");
mobileNav.addEventListener('click', function () {
  bars.forEach(bar => bar.classList.toggle("change"));
  if (nav.style.display == "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});
