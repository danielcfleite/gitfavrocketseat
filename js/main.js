import { FavoritesVew } from "./favorites.js";

new FavoritesVew("#app");

const buttonSearch = document.querySelector(".search button");
const star = document.querySelector(".search button img");
let animation = false;
function rotate() {
  if ((animation = true)) {
    animation = false;
    star.style.animation = "rotate 2s linear";
    setTimeout(() => {
      star.style.transform = "rotate(0deg)";
      animation = true;
      console.log(animation);
      console.log(star.style.transform);
    }, 3000);
  }
}

buttonSearch.onmouseover = rotate;
