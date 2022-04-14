// Created by: Zaida Hammel
// Created on: April 2022
//
// This program accepts user input

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  });
}

/**
 * This function calculates area of a triangle.
 */
function calculate() {
  // input
  const length = parseFloat(document.getElementById("length-of-pyramid").value);
  const width = parseFloat(document.getElementById("width-of-pyramid").value);
  const height = parseFloat(document.getElementById("height-of-pyramid").value);

  // process
  const volume = (length * width * height) / 3;

  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " mm³";
}
