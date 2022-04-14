// Created by: Zaida Hammel
// Created on: April 2022
//
// This program accepts user input

"use strict";

 // Check servie worker.
  
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  });
}

// This function calculates the volume of a sphere. 
function calculate () {
  // input
  const radius = parseInt(document.getElementById("radius").value)
  // process
  const volume = 4/3 * Math.PI * Math.pow(radius, 3)
  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + ' cm³' 
}