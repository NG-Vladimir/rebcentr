// БУРГЕР-МЕНЮ
const burger = document.getElementById("burger");
const menu = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll('.menu-links a');
const body = document.body;

// Функции управления меню
function openMenu() {
  menu.classList.add("active");
  burger.classList.add("hidden");
  closeBtn.classList.add("active");
  body.classList.add("menu-open");
}

function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("hidden");
  closeBtn.classList.remove("active");
  body.classList.remove("menu-open");
}

// Инициализация меню
if (burger && menu && closeBtn) {
  burger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      closeMenu();
    }
  });
}

// ПЕЧАТНЫЙ ЭФФЕКТ
const typedText = document.getElementById("typed-text");
const text = "Благотворительное учреждение по социальной адаптации алко-наркозависимых";
let index = 0;

function type() {
  if (!typedText) return;
  
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

// Запуск когда страница полностью готова
window.addEventListener("load", function() {
  if (typedText) {
    typedText.textContent = "";
    type();
  }
});