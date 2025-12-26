const burgerMenu = document.querySelector('.burger-menu');
const mobileView = document.querySelector('.mobile-view');
const line1 = document.querySelector('.line1')
const line3 = document.querySelector('.line3')

burgerMenu.addEventListener('click', () => {
    mobileView.classList.toggle('d-none');
    line1.classList.toggle('line1-clicked');
    line3.classList.toggle('line3-clicked');
})