const image = document.querySelector(".picture-container-image");
const imageparent = document.querySelector(".picture-container");
const avatar = document.querySelector(".avatar");
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
for (let i = 0; i < 25; i++) {
  const element = document.createElement("div");
  element.classList.add("random-avatar-images");
  const image = document.createElement("img");
  image.src = `https://robohash.org/${i}`;
  image.classList.add("image-avatar");
  element.append(image);
  avatar.append(element);
}
const avatar_random = document.querySelectorAll(".image-avatar");
$(avatar_random).css("width", "75px");
$(avatar_random).css("height", "75px");
// $(avatar_random).css("border-radius", "50%");

const user_name = [
  "Ahmed Bashir",
  "Ahmet Demir",
  "Ahmet Evkaya",
  "Emre Akkaya",
  "Serkan Akça",
  "Enrique Arce Temple",
  "Ayşe Beytaş",
  "Burhan Ayvaz",
  "Kaan Baş",
  "Melih Altınok",
  "Melih Kaan Çekim",
  "Oğuzhan Pur",
  "Ege Eren",
  "Ertuğrul Cantez",
  "Ahmet Davutoğlu",
  "Elif Karasu",
  "Elif Rana Yavaş",
  "Erim Ünal Ersoy",
  "Ege Ulusoy",
  "Ersin Sayım",
  "Dünya Şaşmaz",
  "İrem Yıldırım",
  "Doğancan Beytaş",
  "Selami Şahin",
];

const avatartxts = document.querySelectorAll(".random-avatar-images");

avatartxts.forEach((image, i) => {
  const name_div = document.createElement("div");
  name_div.classList.add("username-container");
  const name_span = document.createElement("span");
  name_span.innerHTML = `${user_name[i]}`;
  name_span.classList.add("user-name");
  const name_span_child = document.createElement("span");
  name_span_child.classList.add("user-name-child");
  name_span_child.innerHTML = "Ağınızda";
  const icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-xmark");
  icon.classList.add("avatar-icon");
  name_div.append(name_span, name_span_child, icon);
  image.appendChild(name_div);
});

const inp = document.querySelector(".chatinput");
inp.addEventListener("input", (e) => {
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      const userremoveList = document.querySelectorAll(".chatting-value-user");
      userremoveList.forEach((userremove) => {
        userremove.remove();
      });
    } else {
      const userarea = document.querySelector(".chatting-user-area");
      userarea.innerHTML = "";
    }
  });
  const inputValue = inp.value.toLowerCase();
  for (let i = 0; i < user_name.length; i++) {
    if (inputValue === user_name[i][0].toLowerCase()) {
      const userarea = document.querySelector(".chatting-user-area");
      const uservalue = document.createElement("span");
      uservalue.classList.add("user-value-output");
      uservalue.innerHTML = `${user_name[i]}`;
      if (inputValue === user_name[i][0].toLowerCase()) {
        const valuecontainer = document.createElement("div");
        valuecontainer.classList.add("chatting-value-user");
        const usertextingcontainer = document.createElement("div");
        usertextingcontainer.classList.add("chatting-texting-container");
        const uservalue = document.createElement("span");
        uservalue.classList.add("user-value-output");
        uservalue.innerHTML = `${user_name[i]}`;
        const image = document.createElement("img");
        image.classList.add("user-value-image");
        image.src = `https://robohash.org/${i}`;
        const span_value_connect = document.createElement("span");
        span_value_connect.classList.add("user-value-connect");
        span_value_connect.innerHTML = "Ağınızda";
        usertextingcontainer.append(uservalue, span_value_connect);
        valuecontainer.append(image, usertextingcontainer);
        userarea.append(valuecontainer);
      }
    }
  }
});
