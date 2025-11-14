// БУРГЕР-МЕНЮ
const burger = document.getElementById("burger");
const menu = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeMenu");

burger.addEventListener("click", () => {
  menu.classList.add("active");
  burger.classList.add("hidden");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  burger.classList.remove("hidden");
  closeBtn.classList.remove("active");
});

// ПЕЧАТНЫЙ ЭФФЕКТ ДЛЯ HERO H1
const typedText = document.getElementById("typed-text");
const text = "Благотворительная учреждение по социальной адаптации алко-наркозависимых";
let index = 0;

function type() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50); // скорость печати
  }
}

window.addEventListener("load", type);
