import renderHomePage from "./home-module";

function contactTesting() {
  console.log("Contact import success!")
}

function createContactPage() {
  contactTesting();
  const container = document.querySelector('#content');
  const contact = document.createElement('div');
  contact.innerHTML = `
    <section class='section'>
      <h2 class='banner'>Contact Us</h2>
      <div class="contact-container">
        <p>Phone Number: (123) 456-7890 <br> <br>
        Email: ccicecreamshoppe@hotmail.com</p>
      </div>
    </section>
  `;
  container.appendChild(contact);
}

function renderContactPage() {
  createContactPage();
}

export default renderContactPage;