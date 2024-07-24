const menuButton = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');
const themeButton = document.querySelectorAll('.theme-button');

// let night = false;

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    themeButton[1].classList.remove('deactivated');
    themeButton[0].classList.add('deactivated');
} else {
    themeButton[0].classList.remove('deactivated');
    themeButton[1].classList.add('deactivated');
}

themeButton[0].addEventListener('click', () => {
    themeButton[1].classList.remove('deactivated');
    themeButton[0].classList.add('deactivated');
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
});

themeButton[1].addEventListener('click', () => {
    themeButton[0].classList.remove('deactivated');
    themeButton[1].classList.add('deactivated');
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
});

menuButton.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden');
    });
});

screenOverlay.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});

if(window.innerWidth >= 768) {
    document.body.classList.remove('sidebar-hidden');
};