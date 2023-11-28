import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // fetch drinks
  const drinks = await fetchDrinks(url);
  // display drinks
  const section = await displayDrinks(drinks);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
