const searchinput = document.querySelector(".searchinput");
const searchbox = document.querySelector(".opened-searchbox-container");
const cancelicon = document.querySelector(".cancel-icon");
const hugething = document.querySelector(".hugething");
const accountopener = document.querySelector(".account-opener");
const accountcontainer = document.querySelector(".account-container");
const updateopener = document.querySelector(".update-opener");
const updatecontainer = document.querySelector(".update-container");
const image = document.querySelector(".picture-container-image");
const imageparent = document.querySelector(".picture-container");

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

updateopener.addEventListener("click", () => {
  $(updatecontainer).toggleClass("showy");
});

if (!updatecontainer.classList.contains("showy")) {
  document.addEventListener("click", function (e) {
    $(updatecontainer).toggleClass("showy");
    console.log("selam");
  });
}
