import homeTesting from "./home-module.js"
import contactTesting from "./contact-module.js"
import menuTesting from "./menu-module.js"

console.log("Testing Webpack watch");

function switchTabs(e) {
  console.log(e.target.dataset.target);
  tabs.forEach(tab => tab.classList.remove("active"));
  this.classList.add("active");
  render(e.target.dataset.target);

}

function render(tab) {
  //call correct module based on value of tab
  switch (tab) {
    case '#home':
      homeTesting();
      break;
    case '#menu':
      menuTesting();
      break;
    case '#contact':
      contactTesting();
      break;
  } 
  return;
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', switchTabs));