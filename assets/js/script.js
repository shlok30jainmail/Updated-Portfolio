// 'use strict';

// console.log("Hi");

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// console.log("Hi");


// changes

// var btn = document.getElementsByClassName("btn");
// let side = document.getElementById("side");


// // let count =0;
// btn.addEventListener("click", ()=>{
//   console.log("Hi");
// });

let darkBtn = document.getElementById("dark-btn");
let changeSide = document.getElementById("changeSide");
let changeArticle = document.getElementById("changeArticle");
let titleBgChange = document.getElementById("titleBgChange");
let avatarBg = document.getElementById("avatarBg");
let iconBoxBg  = document.getElementsByClassName("icon-box-bg");
let resumePage = document.getElementById("resumePage");
let portfolioPage = document.getElementById("portfolioPage");
let contactPage = document.getElementById("contactPage");
let serviceList = document.querySelectorAll(".service-item");
let contentCardList = document.querySelectorAll(".content-card");
let navbarBG = document.getElementById("navbarBG");
let testimonialsAvatarBox = document.querySelectorAll(".testimonials-avatar-box");
let testimonialsModalList  = document.querySelectorAll(".testimonials-modal");
let iconBoxList  = document.querySelectorAll(".icon-box");



// let icon-box = document.getElementsByClassName("icon-box");
// let changeSidebar = document.getElementsByClassName("sidebar");
// let changeArticle = document.getElementsByTagName("article");

// .sidebar, article
let count =0;
darkBtn.onclick = ()=>{
  console.log("Hi");
  count++;
  if(count&1){
    changeSide.style.background = "#b14141";
    changeArticle.style.background = "#b14141";
    resumePage.style.background = "#b14141";
    portfolioPage.style.background = "#b14141";
    contactPage.style.background = "#b14141";

    titleBgChange.style.background = "hsl(352.17deg 73.67% 27.2)";
    avatarBg.style.background = "hsl(352.17deg 73.67% 27.2)";
    document.body.style.backgroundColor = "rgb(248, 249, 250)";
    navbarBG.style.backgroundColor="hsl(352.17deg 73.67% 27.2)";
    darkBtn.innerHTML = "Dark";
    // change multiple color using query selector
    serviceList.forEach(item => {
      item.classList.add('serviceBG');
    });

    contentCardList.forEach(item => {
      item.classList.add('content-cardBG');
    });

    iconBoxList.forEach(item => {
      item.classList.add('icon-box-bg-1')
    });

    testimonialsModalList.forEach(item => {
      item.style.backgroundColor="#c58686";
    });
    // navbarBG.style.backgroundColor="#c58686"; var(--eerie-black-2)

    testimonialsAvatarBox.forEach(item=>{
     item.classList.add('testimonials-avatar-box-bg');
    });

  }else{
    
    changeSide.style.background = "var(--eerie-black-2)";
    changeArticle.style.background = "var(--eerie-black-2)";
    resumePage.style.background = "var(--eerie-black-2)";
    portfolioPage.style.background = "var(--eerie-black-2)";
    contactPage.style.background = "var(--eerie-black-2)";
    titleBgChange.style.background = "var(--onyx)";
    document.body.style.backgroundColor = "#000000";
    avatarBg.style.background = "var(--border-gradient-onyx)";
    navbarBG.style.backgroundColor="hsla(240, 1%, 17%, 0.75)";
    darkBtn.innerHTML = "Light";
    serviceList.forEach(item => {
      item.classList.remove('serviceBG');
    });  

    contentCardList.forEach(item => {
      item.classList.remove('content-cardBG');
    });

    iconBoxList.forEach(item => {
      item.classList.remove('icon-box-bg-1')
    });

    testimonialsModalList.forEach(item => {
      item.style.backgroundColor="var(--eerie-black-2)";
    });

    testimonialsAvatarBox.forEach(item=>{
      item.classList.remove('testimonials-avatar-box-bg');
     });
  }

  // iconBoxBg.classList.toggle("icon-box-bg-1");

  

}

