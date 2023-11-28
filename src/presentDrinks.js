import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {
  // fetch drinks
  const drinks = await fetchDrinks(url);
  console.log(drinks);
  // display drinks
};

export default showDrinks;
