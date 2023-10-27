"use strict"
const activeCheckbox = document.getElementById("activeCheckbox");
//activeCheckbox.checked= true;
const displayButton = document.getElementById("displayButton");

function display() {
  alert(activeCheckbox.checked)
}

displayButton.onclick = display;
//to trigger on checkbox 
//activeCheckbox.onclick= display;

