const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  navMenuLink = document.getElementsByClassName("nav_menu_link"),
  CloseBtnId = document.getElementById("close_btn");
Présentation = document.getElementById("Présentation");
ccm = document.getElementById("ccm");
Fonctionnalités = document.getElementById("Fonctionnalités");
Equipe = document.getElementById("Equipe");
Contact = document.getElementById("Contact");
let index

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
  for (var i = 0; i < navMenuLink.length; i++) {
    if (i !== index)
    navMenuLink[i].className += " showBlackColor";
  }
  //navMenuLink.classList.add("showBlackColor");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
  for (var i = 0; i < navMenuLink.length; i++) {
    navMenuLink[i].className += "nav_menu_link";
  }
});

Présentation.addEventListener("click", () => {
  index=0
  navId.classList.remove("show");
  Présentation.className = "nav_menu_link active"
  for (var i = 0; i < navMenuLink.length; i++) {
    if (i !== 0)
      navMenuLink[i].className = "nav_menu_link";
  }
});
ccm.addEventListener("click", () => {
  index=1
  navId.classList.remove("show");
  ccm.className = "nav_menu_link active"
  for (var i = 0; i < navMenuLink.length; i++) {
    if (i !== 1)
      navMenuLink[i].className = "nav_menu_link";
  }
});
Fonctionnalités.addEventListener("click", () => {
  index=2
  navId.classList.remove("show");
  Fonctionnalités.className = "nav_menu_link active"
  for (var i = 0; i < navMenuLink.length; i++) {
    if (i !== 2)
    navMenuLink[i].className = "nav_menu_link";
  }
});
Equipe.addEventListener("click", () => {
  index=3
  navId.classList.remove("show");
  Equipe.className = "nav_menu_link active"
  for (var i = 0; i < navMenuLink.length; i++) {
    if (i !== 3)
    navMenuLink[i].className = "nav_menu_link";
  }
});
Contact.addEventListener("click", () => {
  index=4
  navId.classList.remove("show");
  Contact.className = "nav_menu_link active"
  for (var i = 0; i < navMenuLink.length; i++) {
    if (i !== 4)
    navMenuLink[i].className = "nav_menu_link";
  }
});



// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.3,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.3,
  stagger: 0.3
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.3
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 0.3,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 0.3,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 0.3,
});
// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 0.3,
});
gsap.from(".team_img_wrapper_2 img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 0.3,
});
