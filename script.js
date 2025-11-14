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

/* -------- FIX Mobile VH -------- */
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVh();
window.addEventListener("resize", setVh);

/* -------- Typewriter Effect -------- */
const text = "«Путь Свободы»";
let index = 0;
const speed = 90;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typeTitle").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeEffect, 500);
});
