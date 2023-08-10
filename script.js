const image = document.querySelector(".picture-container-image");
const imageparent = document.querySelector(".picture-container");

for (let i = 0; i < 144; i++) {
  const element = document.createElement("div");
  element.classList.add("masonry-item");
  const image = document.createElement("img");
  image.src = "./img/" + i + ".jpg";
  element.append(image);
  imageparent.append(element);
}

document.addEventListener("click", function (e) {
  const clickedTarget = e.target;
  const targetSelector = $(clickedTarget).data("target");
  const targetElement = document.querySelector(targetSelector);

  if (targetElement) {
    if (!targetElement.classList.contains("showy")) {
      hideAllShowyElements();
      targetElement.classList.add("showy");
      clickedTarget.classList.add("showy");
    }
  } else {
    hideAllShowyElements();
  }
  if (!clickedTarget.closest(".showy")) {
    hideAllShowyElements();
  }
});

function hideAllShowyElements() {
  const showyElements = document.querySelectorAll(".showy");
  showyElements.forEach((element) => {
    element.classList.remove("showy");
  });
}
