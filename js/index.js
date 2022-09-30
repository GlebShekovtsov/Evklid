let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  menu.classList.toggle("header__nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("scroll-lock");
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
