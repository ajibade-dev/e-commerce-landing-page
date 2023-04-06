const clicked = document.querySelectorAll('.btnm');
const popup = document.querySelector('.popup-wrapper');
const popper = document.querySelector('.popping')
const close = document.querySelector('.popup-close');
const clicker = document.querySelector('.btnb');

clicked.forEach(clicks => {
    clicks.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'block';
    });
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})

clicker.addEventListener('click', (e) => {
    e.preventDefault();
    popper.style.display = 'block';
})

popper.addEventListener('click', () => {
    popper.style.display = 'none';
})