console.log("Testing Webpack watch");

function switchTabs(e) {
  console.log(e.target.dataset.target);
  tabs.forEach(tab => tab.classList.remove("active"));
  //switch (e.target.dataset.target) {
  //  case '#home':
  //    tabs
  //}
  this.classList.add("active");
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', switchTabs));