"use strict";

console.log("hi")

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const label = document.getElementById("label");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

let slideNumber = 1;

function showSlide1() {
  slide1.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  label.textContent = "Treeline";
}

function showSlide2() {
  slide2.classList.remove("hidden");
  slide1.classList.add("hidden");
  slide3.classList.add("hidden");
  label.textContent = "Sunset";
}

function showSlide3() {
  slide3.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide1.classList.add("hidden");
  label.textContent = "Rome";
}

function render() {
  if (slideNumber === 1) {
    showSlide1;
  } else if (slideNumber === 2) {
    showSlide2;
  } else {
    showSlide3;
  }
}

prev.addEventListener("click", () => {
  slideNumber = slideNumber - 1;
  // or you can use slideNumber--
  if (slideNumber < 1) {
    slideNumber = 3;
  }
  render();
});

next.addEventListener("click", () => {
  slideNumber = slideNumber + 1;
  // or you can use slideNumber++
  if (slideNumber > 3) {
    slideNumber = 1;
  }
  render();
});

render();
