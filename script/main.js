const namуСountry = prompt(`Виберіть країну:
    Україна
    Німеччина
    Франція
    Австрія
    Болгарія`);

const contentDiv = document.getElementById("ukraine");
const contentDiv2 = document.getElementById("germany");
const contentDiv3 = document.getElementById("france");
const contentDiv4 = document.getElementById("austria");
const contentDiv5 = document.getElementById("bulgaria");
const contentDiv6 = document.getElementById("error");

switch (namуСountry.toLowerCase()) {
  case "україна":
  case "ukraine":
    document.getElementById("ukraine").classList.remove("hidden");
    break;
  case "німеччина":
  case "germany":
    document.getElementById("germany").classList.remove("hidden");
    break;
  case "франція":
  case "france":
    document.getElementById("france").classList.remove("hidden");
    break;
  case "австрія":
  case "austria":
    document.getElementById("austria").classList.remove("hidden");
    break;
  case "болгарія":
  case "bulgaria":
    document.getElementById("bulgaria").classList.remove("hidden");
    break;
  default:
    document.getElementById("error").classList.remove("hidden");
    break;
}
