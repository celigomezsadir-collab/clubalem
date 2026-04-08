const hero = document.querySelector(".home-hero");
const sideMenu = document.querySelector(".home-nav");
const bottomNav = document.querySelector(".bottom-nav");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const trigger = window.innerHeight * 0.5;

  // 🔹 DETECTAR DIRECCIÓN
  const scrollingDown = scrollY > lastScroll;

  // 🔹 MOSTRAR SOLO SI BAJA Y PASÓ EL HERO
  if (scrollY > trigger && scrollingDown) {
    bottomNav.classList.add("visible");
    sideMenu.classList.add("hidden");
  } else {
    bottomNav.classList.remove("visible");
    sideMenu.classList.remove("hidden");
  }

  // 🔹 PARALLAX
  if (scrollY < 500) {
    const move = scrollY * 0.3;
    const opacity = 1 - scrollY / 400;

    hero.style.transform = `translateY(-${move}px)`;
    hero.style.opacity = opacity;
  }

  lastScroll = scrollY;
});