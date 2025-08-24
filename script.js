// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll reveal animations
const reveals = document.querySelectorAll(".animate-up, .animate-fade, .animate-left, .animate-right");
window.addEventListener("scroll", checkReveal);
function checkReveal(){
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add("show");
    }
  })
}
checkReveal(); // on load