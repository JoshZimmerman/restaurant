function menuTesting() {
  console.log("Menu import Success!")

}

function createMenuPage() {
  menuTesting();
  const container = document.querySelector('#content');
  const menu = document.createElement('div');
  menu.innerHTML = `
    <section class='section'>
      <h2 class='banner'>Menu</h2>
      <div class="menu-container">
        <div class="menu-item">
          <img class="menu-img" src='./images/ice-cream-flavors.jpg' alt="Ice cream cones" width="500" heigth="282">
          <div class="menu-text">
            <p>Year Round Flavors:</p>
            <p>Vanilla, Strawberry, Cookies 'n Cream, Chocolate</p>
            <p>Small: 2.99 <br> Medium: 3.99 <br> Large: 4.99</p>
          </div>
        </div>
        <div class="menu-item">
          <img class="menu-img" src="./images/Feature-Ice-Cream-Sundae.jpg" 
            alt="Ice cream Sundaes">
          <div class="menu-text">
            <p>Build Your Own Sundaes</p>
            <p>Single Flavor: 4.99 <br> Two Flavors: 5.99 <br> Three Flavors: 6.99</p>
            <p>Two toppings included, 50c for each extra topping</p>
          </div>
        </div>
      </div>
    </section>
    `;
  container.appendChild(menu);
}

function renderMenuPage() {
  //do stuff
  createMenuPage();
}

export default renderMenuPage;