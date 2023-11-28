import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {
  // fetch drinks
  const drinks = await fetchDrinks(url);
  // display drinks
  const section = displayDrinks(drinks);
};

export default showDrinks;
