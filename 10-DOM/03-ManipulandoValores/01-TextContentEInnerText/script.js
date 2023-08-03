"use strict";

const classP = document.querySelector(".paragrafo");
const idP = document.querySelector("#paragrafo");

console.log(classP.textContent);
console.log(idP.innerText);

classP.textContent = "Felipe Silva";
idP.innerText = "<strong>Felipe Silva</strong>";
