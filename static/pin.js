const pin = document.querySelectorAll(".imageandtext");
const pinfunc = () => {
  pin.forEach((element) => {
    const txt = document.createElement("a");
    txt.className = "pin-button";
    txt.innerHTML = "Kaydet";
    $(txt).attr("href", "{% url 'save_pin' pin.id %}");
    // $(txt).attr("href", "#");

    const pintxt = document.createElement("button");
    pintxt.className = "pin-left-button";
    pintxt.innerHTML = "Detay";

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
const pin_create = document.querySelector(".header-input");
const pin_create_header_border = document.querySelector(
  ".create-pin-header-border"
);
document.addEventListener("click", (e) => {
  const clickedTarget = e.target;
  if (clickedTarget == pin_create || clickedTarget == aboutarea) {
    $(pin_create_header_border).css("border-top", "1.5px solid #0076d3");
  }
  if (clickedTarget != pin_create) {
    $(pin_create_header_border).css("border-top", "1.5px solid #878787");
  }
});
const aboutarea = document.querySelector(".about-area");
const pin_create_header_under_border = document.querySelector(
  ".create-pin-header-under-border"
);
document.addEventListener("click", (e) => {
  const clickedTarget = e.target;
  if (clickedTarget == aboutarea) {
    $(pin_create_header_under_border).css("border-top", "1.5px solid #0076d3");
  }
  if (clickedTarget != aboutarea) {
    $(pin_create_header_under_border).css("border-top", "1.5px solid #878787");
  }
});
