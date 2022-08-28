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
