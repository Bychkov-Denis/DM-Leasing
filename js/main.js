const tabsItem = document.querySelectorAll('.tabs__btn-item');

const toggleTab = event => {
  const tabTarget = event.currentTarget;

  tabsItem.forEach(tab => {
    tab.classList.remove("tabs__btn-item--active");
  })

  tabTarget.classList.add("tabs__btn-item--active");
}

tabsItem.forEach(tab => {
  tab.addEventListener("click", toggleTab)
})

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
const body = document.body;

const toggleMenu = () => {
  menu.classList.toggle("menu__list--active");
  body.classList.toggle("menu-opened");
};

menuBtn.addEventListener("click", toggleMenu);

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

