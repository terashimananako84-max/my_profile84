// 変数
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');
const slides = document.querySelectorAll(".image-slides li");
// 関数
function closeMenu() {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.textContent = '☰';
}
// hamburger click
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.classList.toggle('open');
        if (isOpen) {
            hamburger.textContent = '×';
        } else {
            hamburger.textContent = '☰';
        }
    });
}
// nav click
if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
}
//slides -------------------------------
if (slides.length > 0) {
    let current = 0;
    slides[current].classList.add("active");
    setInterval(() => {
        slides[current].classList.remove("active");
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        slides[current].classList.add("active");
    }, 5000);
}

// loading screen
const loadingScreen = document.querySelector('.loading');
window.addEventListener('load', () => {
    const animation = loadingScreen.animate(
        [
            {
                opacity: 1,
                visibility: 'visible',
            },
            {
                opacity: 0,
                visibility: 'hidden',
            }
        ],
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    animation.addEventListener('finish', () => {
        loadingScreen.style.display = 'none';
    });
});