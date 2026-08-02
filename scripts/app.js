const openMobileMenu = document.querySelector(".open-mobile-menu");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");

if (openMobileMenu && closeMobileMenu && mobileMenu) {
  openMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("-right-64");
    mobileMenu.classList.add("right-0");
  });

  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("-right-64");
  });
}
