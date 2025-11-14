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
  // Открытие меню
  burger.addEventListener("click", openMenu);
  
  // Закрытие меню
  closeBtn.addEventListener("click", closeMenu);
  
  // Закрытие при клике на ссылки
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Закрытие при клике вне меню
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      closeMenu();
    }
  });
  
  // Закрытие при нажатии Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ПЕЧАТНЫЙ ЭФФЕКТ - ТЕПЕРЬ ДЛЯ ОПИСАНИЯ (h2)
const typedText = document.getElementById("typed-text");
const text = "Благотворительное учреждение по социальной адаптации алко-наркозависимых";
let index = 0;
let typingStarted = false;

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
  if (typedText && !typingStarted) {
    typingStarted = true;
    typedText.textContent = "";
    type();
  }
});

// Предотвращаем масштабирование на iOS
document.addEventListener('touchstart', function(e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, false);