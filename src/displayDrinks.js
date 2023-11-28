import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = getElement(".section-center");
  const title = getElement(".title");

  if (!drinks) {
    // hide loading
    title.textContent = "sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<!-- single drink -->
        <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
          </article>
        </a>
        <!-- end single drink -->`;
    })
    .join("");
  // hide loading
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
