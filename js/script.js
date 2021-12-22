"use strict";

//======== webp support
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;

const btnBrg = document.querySelector('.header__burger'),
navTop = document.querySelector('.header__nav_top');

btnBrg.addEventListener('click', () => openBrgMenu());

function openBrgMenu(params) {
	navTop.classList.toggle("open-menu");
	btnBrg.classList.toggle("close-brg");
}