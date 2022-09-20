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
  slidesPerGroup: 2,
  slidesPerView: 2,
  spaceBetween: 38,
  navigation: {
    prevEl: ".btn-prev--dark",
    nextEl: ".btn-next--dark",
  },
  pagination: {
    el: ".swiper-navigation__pagination",
    type: "fraction",
  },
  breakpoints: {
    769: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1025: {
      allowTouchMove: false,
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
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
  slidesPerGroup: 2,
  slidesPerView: 2,
  spaceBetween: 34,
  navigation: {
    nextEl: ".btn-next--light-big",
    prevEl: ".btn-prev--light-big",
  },
  pagination: {
    el: ".events__pagination",
    type: "bullets",
    clickable: true,
  },
  a11y: {
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
    nextSlideMessage: "Следующий слайд",
    prevSlideMessage: "Предыдущий слайд",
    paginationBulletMessage: "Перейти на слайд {{index}}",
  },
  breakpoints: {
    769: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 27,
    },
    1025: {
      allowTouchMove: false,
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
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
  slidesPerGroup: 2,
  slidesPerView: 2,
  spaceBetween: 35,
  navigation: {
    prevEl: ".partners__btn-prev",
    nextEl: ".partners__btn-next",
  },
  breakpoints: {
    769: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1251: {
      allowTouchMove: false,
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
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

/* inputmask */
const inputTel = document.querySelector(".callback__phone");
const telMask = new Inputmask("+7 (999)-999-99-99");
telMask.mask(inputTel);

/* just-validate */
const validation = new JustValidate(".callback", {
  errorFieldCssClass: "callback__input--invalid",
  errorLabelCssClass: "lable-invalid",
});

validation
  .addField(".callback__name", [
    {
      rule: "required",
      errorMessage: "Введите имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Имя слишком короткое",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Имя слишком длинное",
    },
    {
      rule: "customRegexp",
      value: /^[a-zа-яё]+(?: [a-zа-яё]+)?$/i,
      errorMessage: "Неверный формат имени",
    },
  ])
  .addField(".callback__phone", [
    {
      rule: "required",
      errorMessage: "Введите телефон",
    },
    {
      validator: (name, value) => {
        const phone = inputTel.inputmask.unmaskedvalue();
        return Boolean(+phone && phone.length === 10);
      },
      errorMessage: "Неверный телефон",
    },
  ]);

/* map */
ymaps.ready(init);
function init() {
  const yandexMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      controls: ["geolocationControl", "zoomControl"],
      zoom: 14,
    },
    {
      zoomControlSize: "medium",
      zoomControlPosition: { top: "260px", right: "10px" },
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "332px", right: "10px" },
    }
  );
  const mapPoint = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-point.svg",
      iconImageSize: [20, 20],
    }
  );
  yandexMap.geoObjects.add(mapPoint);
  yandexMap.behaviors.disable("scrollZoom");
}

/* burger menu */
const burgerMenuEl = document.querySelector(".nav");
const bodyEl = document.querySelector(".body");

document.querySelector(".burger").addEventListener("click", () => {
  burgerMenuEl.classList.add("nav--active");
  bodyEl.classList.add("stop-scroll");
});

document.querySelector(".nav__close-btn").addEventListener("click", () => {
  burgerMenuEl.classList.remove("nav--active");
  bodyEl.classList.remove("stop-scroll");
});

/* search */
const searchForm = document.querySelector(".search--top");
const searchCloseBtn = document.querySelector(".search__close-btn");

document.querySelector(".open-search").addEventListener("click", () => {
  searchForm.classList.add("search--active");

  searchCloseBtn.addEventListener("click", () =>
    searchForm.classList.remove("search--active")
  );
});
