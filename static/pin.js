const pin = document.querySelectorAll(".imageandtext");
const pinfunc = () => {
  pin.forEach((element) => {
    const txt = document.createElement("button");
    txt.className = "pin-button";
    txt.innerHTML = "Kaydet";
    $(txt).attr("href", "{% URL 'profile' %}");
    const pintxt = document.createElement("button");
    pintxt.className = "pin-left-button";
    pintxt.innerHTML = "Detay";
    pintxt.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    element.append(txt, pintxt);
    console.log("selam");
  });
};
pinfunc();

const pinsave = document.querySelectorAll(".pin-left-span");
const profilesaver = document.querySelector(".profile-save-container");
pinsave.forEach((element) => {
  element.addEventListener("click", (e) => {
    $(pinsave).toggleClass("showwy");
  });
});
