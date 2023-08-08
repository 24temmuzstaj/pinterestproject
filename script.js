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

searchinput.addEventListener("click", (e) => {
  e.stopPropagation();
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
accountopener.addEventListener("click", (e) => {
  e.stopPropagation();
  $(accountcontainer).toggleClass("showy");
});

updateopener.addEventListener("click", (e) => {
  e.stopPropagation();
  $(updatecontainer).toggleClass("showy");
});

document.addEventListener("click", function (e) {
  if (
    searchbox.classList.contains("showy") ||
    accountcontainer.classList.contains("showy") ||
    updatecontainer.classList.contains("showy") ||
    hugething.classList.contains("showy")
  ) {
    searchbox.classList.remove("showy");
    accountcontainer.classList.remove("showy");
    updatecontainer.classList.remove("showy");
    hugething.classList.remove("showy");
    console.log("selam");
  }
});
for (let i = 0; i < 144; i++) {
  const element = document.createElement("div");
  element.classList.add("masonry-item");
  const image = document.createElement("img");
  image.src = "./img/" + i + ".jpg";
  element.append(image);
  imageparent.append(element);
}
