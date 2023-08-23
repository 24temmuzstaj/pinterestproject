const image = document.querySelector(".picture-container-image");
const imageparent = document.querySelector(".picture-container");

for (let i = 0; i < 144; i++) {
    const element = document.createElement("div");
    element.classList.add("masonry-item");
    const image = document.createElement("img");
    image.src ="/static/img/" + i + ".jpg";
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
    img.src = "/static/img/forpin.jpg";
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
