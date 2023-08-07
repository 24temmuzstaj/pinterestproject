const searchinput = document.querySelector(".searchinput");
const searchbox = document.querySelector(".opened-searchbox-container");
const cancelicon = document.querySelector(".cancel-icon");
const hugething = document.querySelector(".hugething");
const accountopener = document.querySelector(".account-opener");
const accountcontainer = document.querySelector(".account-container");
const updateupper = document.querySelector(".update-upper");
const moreicon = document.querySelector(".moreicon");
searchinput.addEventListener("click", () => {
  $(searchbox).toggleClass("showy");
  $(cancelicon).toggleClass("showy");
  $(hugething).toggleClass("showy");
});
cancelicon.addEventListener("click", () => {
  $(searchbox).toggleClass("showy");
  $(cancelicon).toggleClass("showy");
});
hugething.addEventListener("click", () => {
  $(searchbox).addClass("showy");
  $(hugething).toggleClass("showy");
});
accountopener.addEventListener("click", () => {
  $(accountcontainer).toggleClass("showy");
});
/* updateupper.addEventListener("mouseenter", () => {
  $(moreicon).toggleClass("showy");
});
updateupper.addEventListener("mouseleave", () => {
  $(moreicon).toggleClass("showy");
});
 */