//
document.addEventListener("click", function (e) {
  const clickedTarget = e.target;
  const targetSelector = $(clickedTarget).data("target");
  const targetElement = document.querySelector(targetSelector);
  const hugething = document.querySelector(".hugething");
  if (targetElement) {
    if (!targetElement.classList.contains("showwy")) {
      hideAllShowyElements();
      targetElement.classList.add("showwy");
      clickedTarget.classList.add("showwy");
      if (targetElement.classList.contains("opened-searchbox-container")) {
        hugething.classList.add("showwy");
      }
    }
  } else {
    hideAllShowyElements();
  }
  if (!clickedTarget.closest(".showwy")) {
    hideAllShowyElements();
  }
});

function hideAllShowyElements() {
  const showyElements = document.querySelectorAll(".showwy");
  showyElements.forEach((element) => {
    element.classList.remove("showwy");
  });
}
const avatar = document.querySelector(".avatar");
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
  "Ahmet Bashir",
  "Alkan Demir",
  "Ahmet Evkaya",
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
  "Altan Kirazdoğan",
  "Elif Rana Yavaş",
  "Ege Ulusoy",
  "Emel Sayın",
  "Elif Sultan Kısacık",
  "Dünya Şaşmaz",
  "İrem Yıldırım",
  "Doğancan Beytaş",
  "Selami Şahin",
  "Ecem Konuk",
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
const user_search_input = document.querySelector(".user-search-input");
const chatting_opener = document.querySelector(".message-chatting-container");
user_search_input.addEventListener("click", () => {
  $(chatting_opener).toggleClass("showwy");
});
const chatting_close_button = document.querySelector(".cancel-chatting-icon");
chatting_close_button.addEventListener("click", () => {
  $(chatting_opener).removeClass("showwy");
});

const messageBtn = document.querySelector(".threedots");
messageBtn.addEventListener("click", (e) => {
  const clicked = e.target;
  const readcontainer = document.querySelector(".read-container");
  if (clicked == messageBtn) {
    $(readcontainer).toggleClass("showwy");
  } else {
    hideAllShowyElements();
  }
});

const profile = document.querySelectorAll(".profile-item");
const profileSaveContainer = document.querySelector(".profile-save-container");
const hugething = document.querySelector(".hugething");

profile.forEach((element) => {
  element.addEventListener("click", () => {
    $(profileSaveContainer).toggleClass("flexshowy");
    $(hugething).toggleClass("flexshowy");
    hugething.addEventListener("click", () => {
      $(hugething).removeClass("flexshowy");
      $(profileSaveContainer).removeClass("flexshowy");
    });
  });
});
