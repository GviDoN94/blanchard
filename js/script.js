"use strict";

// /* Dropdown menu */
const dropMenu = document.querySelector(".dropdown-menu");
const dropMenuBtns = document.querySelectorAll(".dropdown-menu__btn");
const drops = document.querySelectorAll(".dropdown");

dropMenu.addEventListener("click", (event) => {
  const activeDrop = event.target;
  if (!activeDrop.classList.contains("dropdown-menu__btn")) {
    return;
  }

  dropMenuBtns.forEach((btn) => {
    if (activeDrop == btn) {
      const drop = btn
        .closest(".dropdown-menu__item")
        .querySelector(".dropdown");
      drop.classList.toggle("dropdown--active");
      drops.forEach((elem) => {
        if (elem != drop) {
          elem.classList.remove("dropdown--active");
        }
      });
      btn.classList.toggle("dropdown-menu__btn--active");
    } else {
      btn.classList.remove("dropdown-menu__btn--active");
    }
  });

  document.addEventListener("click", (el) => {
    if (!el.target.closest(".dropdown-menu__item")) {
      dropMenuBtns.forEach((btn) =>
        btn.classList.remove("dropdown-menu__btn--active")
      );
      drops.forEach((drop) => drop.classList.remove("dropdown--active"));
    }
  });
});

/* Simplebar */
Array.prototype.forEach.call(
  document.querySelectorAll(".dropdown__simplebar"),
  (el) => new SimpleBar(el)
);

/* swiper */
const heroSwiper = new Swiper(".top-swiper__container", {
  allowTouchMove: false,
  loop: true,
  effect: "fade",
  speed: 10000,
  autoplay: {
    delay: 2000,
  },
});

const gallerySwiper = new Swiper(".gallery-swiper", {
  allowTouchMove: false,
  slidesPerGroup: 3,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    prevEl: ".swiper-btn--perv",
    nextEl: ".swiper-btn--next",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  watchSlidesProgress: true,

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
  },
});

/* choices-js */
const selectEl = document.querySelector(".filter__select");

const choices = new Choices(selectEl, {
  removeItems: false,
  searchEnabled: false,
  position: "bottom",
  shouldSort: false,
});
