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
    if (activeDrop === btn) {
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
    prevEl: ".btn-prev--dark",
    nextEl: ".btn-next--dark",
  },
  pagination: {
    el: ".swiper-navigation__pagination",
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

const eventsSwiper = new Swiper(".events-swiper", {
  allowTouchMove: false,
  slidesPerGroup: 3,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".btn-next--light-big",
    prevEl: ".btn-prev--light-big",
  },
  watchSlidesProgress: true,

  on: {
    init: function () {
      document.querySelectorAll(".event-card__link").forEach((eventLink) => {
        if (!eventLink.closest(".swiper-slide-visible")) {
          eventLink.tabIndex = "-1";
        } else {
          eventLink.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      document.querySelectorAll(".event-card__link").forEach((eventLink) => {
        if (!eventLink.closest(".swiper-slide-visible")) {
          eventLink.tabIndex = "-1";
        } else {
          eventLink.tabIndex = "";
        }
      });
    },
  },
});

const partnersSwiper = new Swiper(".partners-swiper", {
  allowTouchMove: false,
  slidesPerGroup: 3,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    prevEl: ".partners__btn-prev",
    nextEl: ".partners__btn-next",
  },
  watchSlidesProgress: true,

  on: {
    init: function () {
      document.querySelectorAll(".partner").forEach((eventLink) => {
        if (!eventLink.closest(".swiper-slide-visible")) {
          eventLink.tabIndex = "-1";
        } else {
          eventLink.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      document.querySelectorAll(".partner").forEach((eventLink) => {
        if (!eventLink.closest(".swiper-slide-visible")) {
          eventLink.tabIndex = "-1";
        } else {
          eventLink.tabIndex = "";
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

/* accordion */
new Accordion(".accordion", {
  elementClass: "accordion__item",
  triggerClass: "accordion__btn",
  panelClass: "accordion__content",
  activeClass: "accordion__item--active",
  openOnInit: [0],
});

/* tabs */
const tabEls = document.querySelectorAll(".accordion__painter-btn");
const painterCards = document.querySelectorAll(".painter-card");

document.querySelector(".accordion").addEventListener("click", (event) => {
  if (!event.target.classList.contains("accordion__painter-btn")) {
    return;
  }

  painterCards.forEach((el) => {
    el.classList.remove("painter-card--active");
    if (event.target.dataset.path === el.dataset.target) {
      el.classList.add("painter-card--active");
    }
  });
});

/* tooltips */
tippy(".tooltip", {
  theme: "projects-tooltips",
  trigger: "click",
  maxWidth: 264,
  duration: [300, 300],
});

const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((el) => {
  el.addEventListener("click", () => {
    tooltips.forEach((el) => el.classList.remove("tooltip--active"));
    if (el.hasAttribute("aria-describedby")) {
      el.classList.toggle("tooltip--active");
    }
  });
});

document.addEventListener("click", (el) => {
  if (!el.target.closest(".tooltip")) {
    tooltips.forEach((el) => el.classList.remove("tooltip--active"));
  }
});
