// Carousel for the testimonial
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonials__cont");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
};

// ToptolBar toggle
const toggleBtn = document.querySelector(".btn__close");
const links = document.querySelector(".toptolbar");

const menuToggle = document.querySelector(".btn__menu");
const menuclose = document.querySelector(".btn__closed");
const sidebar = document.querySelector(".nav__sidebar");

toggleBtn.addEventListener("click", function () {
  links.classList.toggle("hide");
});

menuToggle.addEventListener("click", function () {
  sidebar.style.left = "0px";
});

menuclose.addEventListener("click", function () {
  sidebar.style.left = "-300px";
});
