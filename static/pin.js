const pin = document.querySelectorAll(".imageandtext");
const pinfunc = () => {
  pin.forEach((element) => {
    const txt = document.createElement("button");
    txt.className = "pin-button";
    txt.innerHTML = "Kaydet";
    $(txt).attr("href", "{% URL 'profile' %}");
    txt.addEventListener("click", (event) => {
      event.preventDefault();
    });
    const pintxt = document.createElement("button");
    pintxt.className = "pin-left-button";
    pintxt.innerHTML = "Detay";
    pintxt.addEventListener("click", stopPr, false);
    element.append(txt, pintxt);
    console.log("selam");
  });
  function stopPr(event) {
    event.preventDefault();
  }
};
pinfunc();
/* const txt = document.querySelector(".pin-button");
$(document).ready(function () {
  txt.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}); */

const pinsave = document.querySelectorAll(".pin-left-span");
const profilesaver = document.querySelector(".profile-save-container");
pinsave.forEach((element) => {
  element.addEventListener("click", (e) => {
    $(pinsave).toggleClass("showwy");
  });
});
