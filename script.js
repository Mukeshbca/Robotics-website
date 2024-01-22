/*============================================================================
                                    Évelym S.
                    https://www.linkedin.com/in/evelym-santos/
  ============================================================================*/

    // Navigation
        // Responsive Toggle Navigation =============================================
        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });





        // htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
htmlEndValue = 90,
htmlspeed = 30;

let progresshtml = setInterval(() => {
htmlStartValue++;

htmlValue.textContent = `${htmlStartValue}%`;
htmlProgress.style.background = `conic-gradient(#fca61f ${
  htmlStartValue * 3.6
}deg, #ededed 0deg)`;

if (htmlStartValue == htmlEndValue) {
  clearInterval(progresshtml);
}
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
javascriptEndValue = 75,
jsspeed = 30;

let progressjs = setInterval(() => {
javascriptStartValue++;

javascriptValue.textContent = `${javascriptStartValue}%`;
javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
  javascriptStartValue * 3.6
}deg, #ededed 0deg)`;

if (javascriptStartValue == javascriptEndValue) {
  clearInterval(progressjs);
}
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
phpEndValue = 80,
phpspeed = 30;

let progressphp = setInterval(() => {
phpStartValue++;

phpValue.textContent = `${phpStartValue}%`;
phpProgress.style.background = `conic-gradient(#20c997 ${
  phpStartValue * 3.6
}deg, #ededed 0deg)`;

if (phpStartValue == phpEndValue) {
  clearInterval(progressphp);
}
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
reactEndValue = 30,
rjsspeed = 30;

let progressreact = setInterval(() => {
reactStartValue++;

reactValue.textContent = `${reactStartValue}%`;
reactProgress.style.background = `conic-gradient(#3f396d ${
  reactStartValue * 3.6
}deg, #ededed 0deg)`;

if (reactStartValue == reactEndValue) {
  clearInterval(progressreact);
}
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
$(".filter-item").click(function () {
  const value = $(this).attr("data-filter");
  if (value == "all") {
    $(".post").show("1000");
  } else {
    $(".post")
      .not("." + value)
      .hide("1000");
    $(".post")
      .filter("." + value)
      .show("1000");
  }
});
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
       // remove padding top from body
      document.body.style.paddingTop = '0';
    } 
});
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};
function scrollFunction() {
if (
  document.body.scrollTop > 20 ||
  document.documentElement.scrollTop > 20
) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});



        $(function() {
            $('.owl-carousel.testimonial-carousel').owlCarousel({
              nav: true,
              navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
              dots: false,
              responsive: {
                0: {
                  items: 1,
                },
                750: {
                  items: 2,
                }
              }
            });
          });


    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");
    // Toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
    // Close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });