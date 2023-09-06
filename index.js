import helloGirl from "./helloGirl.js";

const helloWorldStr = helloGirl();

function component() {
  const element = document.createElement("div");
  element.innerHTML = helloWorldStr;
  return element;
}

document.body.appendChild(component());