const menuBtn = document.querySelector('.menu__button');
const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list_active');
    menuIcon.classList.toggle('open');
});