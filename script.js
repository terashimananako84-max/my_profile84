const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

// 関数
function closeMenu() {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.textContent = '☰';
}

// ハンバーガークリック
hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('open');
    if (isOpen) {
        hamburger.textContent = '×';
    } else {
        hamburger.textContent = '☰';
    }
});


// ナビクリックで閉じる
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});
