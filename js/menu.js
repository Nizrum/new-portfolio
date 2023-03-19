const menuBtn = document.querySelector(".menu__button");
const menuIcon = document.querySelector(".menu__icon");
const menuList = document.querySelector(".menu__list");
const menuLinks = document.querySelectorAll(".menu__link");

const closeMenu = () => {
    menuList.classList.remove("menu__list_active");
    menuIcon.classList.remove("open");
};

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list_active");
    menuIcon.classList.toggle("open");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.body.addEventListener("click", (event) => {
    if (!event.target.closest(".menu__list") && !event.target.closest(".menu__button")) {
        closeMenu();
    }
});

document.body.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        closeMenu();
    }
});
