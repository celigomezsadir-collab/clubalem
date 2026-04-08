const hero = document.querySelector(".home-hero");
const sideMenu = document.querySelector(".home-nav");
const bottomNav = document.querySelector(".bottom-nav");

window.addEventListener("scroll", () => {
  const trigger = hero.offsetHeight - 50;

  if (window.scrollY > trigger) {
    sideMenu.classList.add("hidden");
    bottomNav.classList.add("visible");
  } else {
    sideMenu.classList.remove("hidden");
    bottomNav.classList.remove("visible");
  }
});

const hero = document.querySelector(".home-hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // cuánto se mueve el hero
  const move = scrollY * 0.3;

  hero.style.transform = `translateY(-${move}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const move = scrollY * 0.3;
  const opacity = 1 - scrollY / 400;

  hero.style.transform = `translateY(-${move}px)`;
  hero.style.opacity = opacity;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY < 500) {
    const move = scrollY * 0.3;
    const opacity = 1 - scrollY / 400;

    hero.style.transform = `translateY(-${move}px)`;
    hero.style.opacity = opacity;
  }
});