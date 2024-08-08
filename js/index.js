let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  menu.classList.toggle("header__nav--active");
  burger.classList.toggle("burger--active");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    menu.classList.remove("header__nav--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("scroll-lock");
  });
});

document.querySelectorAll(".how-we-work__step").forEach(function (stepBtn) {
  stepBtn.addEventListener("click", function (step) {
    const path = step.currentTarget.dataset.path;
    document.querySelectorAll(".how-we-work__step").forEach(function (btn) {
      btn.classList.remove("how-we-work__step--active");
    });
    step.currentTarget.classList.add("how-we-work__step--active");
    document
      .querySelectorAll(".how-we-work__wrapper")
      .forEach(function (stepItem) {
        stepItem.classList.remove("how-we-work__wrapper--active");
      });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("how-we-work__wrapper--active");
  });
});

// поиск

document
  .querySelector(".form-btn__open")
  .addEventListener("click", function () {
    document.querySelector(".search__form").classList.add("form__active");
    this.classList.add("active");
  });

document.querySelector(".form-close").addEventListener("click", function () {
  let form = document.querySelector(".search__form");
  form.classList.remove("form__active");
  form.querySelector(".search__input").value = "";
  document.querySelector(".form-btn__open").classList.remove("active");
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".search__form");
  if (!target.closest(".header__search")) {
    form.classList.remove("form__active");
    form.querySelector(".search__input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 700,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
    showMultiple: false,

    collapse: true,
  });
});
