const MENU = [
  {name: "Gyros Tasche", price: 6.5},
  {name: "Gyros Teller", price: 10},
  {name: "Pizza Salami", price: 8},
  {name: "Pommes", price: 3.5}
];

let cart = [];

const menuDiv = document.getElementById("menu");

MENU.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    ${item.name} - ${item.price} €
    <button onclick="addToCart('${item.name}', ${item.price})">+</button>
  `;
  menuDiv.appendChild(div);
});

function addToCart(name, price) {
  cart.push({name, price});
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("total");

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartDiv.innerHTML += `<div>${item.name}</div>`;
  });

  totalDiv.innerText = total + " €";
}

function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;

  let text = "Bestellung:\n";

  cart.forEach(i => text += i.name + "\n");

  text += `\nName: ${name}\nAdresse: ${address}`;

  window.open("https://wa.me/?text=" + encodeURIComponent(text));
}