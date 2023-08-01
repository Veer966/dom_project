document.body.style.backgroundColor = "rgb(0, 0, 100)";

const pokemonImages = document.querySelectorAll(".pokemon_images");

pokemonImages.forEach(image => {
  image.style.border = "2px dotted orange";
});
const h3Elements = document.querySelectorAll("h3");

h3Elements.forEach(h3 => {
  h3.style.color = "rgb(255, 255, 160)";
});
