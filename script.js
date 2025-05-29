document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.nickname').classList.add('show');
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.social-links').classList.add('show');
    }, 2000);
});
function animateBackground() {
    const background = document.querySelector('.background-animation');
    let pos = 0;
    setInterval(() => {
        pos = (pos + 1) % 100;
        background.style.backgroundPosition = `${pos}% ${pos}%`;
    }, 100);
}

// Запуск после загрузки
window.addEventListener('load', animateBackground);
