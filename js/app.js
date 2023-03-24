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

toggleBtn.addEventListener("click", function () {
  links.classList.toggle("hide");
});


// ToggleBtn
const toggler = document.querySelector('.btn__menu'),
  navListContainer = document.querySelector('.nav__container');

/*when toggler button is clicked*/
toggler.addEventListener(
  "click",
  () => {
    //make nav visible
    navListContainer.classList.toggle('nav-active');
  },
  true
);