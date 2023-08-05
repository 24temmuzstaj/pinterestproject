const searchinput = document.querySelector(".searchinput");
const searchbox = document.querySelector(".opened-searchbox-container");
const cancelicon = document.querySelector(".cancel-icon");
const hugething = document.querySelector(".hugething");
searchinput.addEventListener("click", () => {
  $(searchbox).toggleClass("showy");
  $(cancelicon).toggleClass("showy");
});
cancelicon.addEventListener("click", () => {
  $(searchbox).toggleClass("showy");
  $(cancelicon).toggleClass("showy");
});
/* document.onclick = (e) => {
  const notincludes = !searchbox.classList.contains("show");
  if (notincludes == true && e.target != searchbox) {
    $(searchbox).addClass("show");
  }
}; */
hugething.addEventListener("click", () => {
  $(searchbox).addClass("showy");
});
