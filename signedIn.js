const image = document.querySelector(".picture-container-image");
const imageparent = document.querySelector(".picture-container");
const avatar = document.querySelector(".avatar");
for (let i = 0; i < 144; i++) {
  const element = document.createElement("div");
  element.classList.add("masonry-item");
  const image = document.createElement("img");
  image.src = "./img/" + i + ".jpg";
  const profile = document.createElement("span");
  profile.classList.add("profile-item");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-angle-down");
  icon.classList.add("profile-icon");
  const ahref = document.createElement("a");
  ahref.innerHTML = "Kaydet";
  ahref.href = "#";
  ahref.classList.add("save");
  profile.innerHTML = "Profil";
  const profileSaveContainer = document.createElement("div");
  profileSaveContainer.classList.add("profile-save-container");
  profileSaveContainer.classList.add(`psc${i}`);
  const saveHeader = document.createElement("div");
  saveHeader.className = "save-header";
  const h5 = document.createElement("h5");
  h5.textContent = "Kaydet";
  saveHeader.appendChild(h5);

  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";
  const inputIcon = document.createElement("i");
  inputIcon.className = "fa-solid fa-magnifying-glass input-save-icon";
  const input = document.createElement("input");
  input.className = "input-save";
  input.type = "text";
  input.placeholder = "Ara";
  inputContainer.appendChild(inputIcon);
  inputContainer.appendChild(input);

  const saveMiddle = document.createElement("div");
  saveMiddle.className = "save-middle";
  const saveMiddleContent = document.createElement("div");
  saveMiddleContent.className = "save-middle-content";
  const clockContainer = document.createElement("div");
  clockContainer.className = "clock-container";
  const clockContent = document.createElement("div");
  clockContent.className = "clock-content";
  const clockIcon = document.createElement("i");
  clockIcon.className = "fa-solid fa-clock-rotate-left clock";
  clockIcon.style.fontSize = "24px";
  clockContent.appendChild(clockIcon);
  const profileTitle = document.createElement("span");
  profileTitle.style.fontSize = "16px";
  profileTitle.style.fontWeight = "600";
  profileTitle.textContent = "Profil";
  const profileButton = document.createElement("a");
  profileButton.href = "#";
  profileButton.className = "profile-save-button ms-auto me-3";
  profileButton.textContent = "Kaydet";
  clockContainer.appendChild(clockContent);
  clockContainer.appendChild(profileTitle);
  clockContainer.appendChild(profileButton);
  saveMiddleContent.appendChild(clockContainer);
  const panoyaKaydet = document.createElement("span");
  panoyaKaydet.style.fontSize = "12px";
  panoyaKaydet.style.display = "block";
  panoyaKaydet.style.paddingBottom = "4px";
  panoyaKaydet.textContent = "Panoya kaydet";
  const middleContent = document.createElement("div");
  middleContent.className = "middle-content";
  const img = document.createElement("img");
  img.style.width = "48px";
  img.style.height = "48px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "10px";
  img.src = "./img/forpin.jpg";
  img.alt = "";
  const pinlerimTitle = document.createElement("span");
  pinlerimTitle.style.fontSize = "16px";
  pinlerimTitle.style.fontWeight = "600";
  pinlerimTitle.textContent = "Pinlerim";
  const pinlerimButton = document.createElement("a");
  pinlerimButton.href = "#";
  pinlerimButton.className = "profile-save-button ms-auto me-3";
  pinlerimButton.textContent = "Kaydet";
  middleContent.appendChild(img);
  middleContent.appendChild(pinlerimTitle);
  middleContent.appendChild(pinlerimButton);
  saveMiddleContent.appendChild(panoyaKaydet);
  saveMiddleContent.appendChild(middleContent);
  saveMiddle.appendChild(saveMiddleContent);

  const saveLower = document.createElement("div");
  saveLower.className = "save-lower d-flex align-items-center";
  const plusDiv = document.createElement("div");
  plusDiv.className = "plus";
  const plusIcon = document.createElement("i");
  plusIcon.className = "fa-solid fa-plus plusicon";
  plusIcon.style.fontSize = "20px";
  plusDiv.appendChild(plusIcon);
  const panoOlusturTitle = document.createElement("span");
  panoOlusturTitle.style.fontSize = "16px";
  panoOlusturTitle.style.fontWeight = "600";
  panoOlusturTitle.textContent = "Pano oluştur";
  saveLower.appendChild(plusDiv);
  saveLower.appendChild(panoOlusturTitle);

  profileSaveContainer.appendChild(saveHeader);
  profileSaveContainer.appendChild(inputContainer);
  profileSaveContainer.appendChild(saveMiddle);
  profileSaveContainer.appendChild(saveLower);
  element.append(image, profile, icon, ahref, profileSaveContainer);
  imageparent.append(element);
}

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
  "Altan Kirazdoğan",
  "Elif Karasu",
  "Elif Rana Yavaş",
  "Erim Ünal Ersoy",
  "Ege Ulusoy",
  "Ersin Sayım",
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
