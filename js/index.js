const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

document.addEventListener('keydown', function (e) {
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
});