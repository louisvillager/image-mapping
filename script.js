// VARIABLES
var extraU = "";
var radioButtons = document.getElementById("lang-select");
var paraChoose = document.getElementById("choose");
var introText = `Choose a color from the Color Wheel`;
var wedges = document.querySelector("map");
var colorCodes = [
  "#ff1c0b",
  "#ff8c1b",
  "#fdff17",
  "#22d800",
  "#0707ff",
  "#bf12c3"
]; // ROYGBV
var colorDisplay = document.getElementById("color-display");

//FUNCTIONS
// On page load
window.addEventListener("load", function() {
  paraChoose.innerHTML = introText;
});

// Radio buttons onchange function
radioButtons.addEventListener("change", function setLanguage() {
  if (document.getElementById("american").checked == true) {
    extraU = "";
  } else {
    // Extra "u" for British "colour"
    extraU = "u";
  }
  introText = `Choose a colo${extraU}r from the Colo${extraU}r Wheel`;
  paraChoose.innerHTML = introText;
});

// Clicking on wedges of image map
// Fill color spectrum with selected color in middle
// and adjacent colors at each end.

wedges.addEventListener("click", function(evt) {

  let color1 = colorCodes[parseInt(evt.target.id) - 1];
  let color2 = colorCodes[parseInt(evt.target.id)];
  let color3 = colorCodes[parseInt(evt.target.id) + 1];

  // Keeping colors within range of ROYGBV array
  if (color1 == undefined) {
    color1 = colorCodes[5];
  } else {
    if (color3 == undefined) {
      color3 = colorCodes[0];
    }
  }

  colorDisplay.style.background = `linear-gradient(to right,${color1} 0%,${color2} 50%,${color3} 100%)`;
});
