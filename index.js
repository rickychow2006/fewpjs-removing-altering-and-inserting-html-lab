// Write your code here!
let Main = document.querySelector("#main").remove();
Main;

let newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "YOUR-NAME is the champion";

document.body.appendChild(newHeader);