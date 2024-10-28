let products = [
  {
    id: 1,
    img: "images/bottle1.jpg",
    item: "R2,490",
    name: "Feeding bottle 1",
    price: "DKK 350",
  },
  {
    id: 2,
    img: "images/bottle2.webp",
    item: "R325",
    name: "Feeding bottle 2",
    price: "DKK 550",
  },
  {
    id: 3,
    img: "images/bottle3.webp",
    item: "R490",
    name: "Feeding bottle 3",
    price: "DKK 390",
  },
  {
    id: 4,
    img: "images/pacifier1.webp",
    item: "R115",
    name: "Pacifier 1",
    price: "DKK 300",
  },
  {
    id: 4,
    img: "images/pacifier2.jpg",
    item: "R105",
    name: "Pacifier 2",
    price: "DKK 250",
  },
  {
    id: 4,
    img: "images/pacifier3.webp",
    item: "R117",
    name: "Pacifier 3",
    price: "DKK 450",
  },
];
function generateProducts() {
  let productDiv = document.getElementById("product");
  products.map((product) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("productItems");
    itemElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <h1>${product.item}</h1>
    <p>${product.name}</p>
      <p class="price">${product.price}</p>
      <button>Add to Cart</button>
    `;
    productDiv.appendChild(itemElement);
  });
}

document.addEventListener("DOMContentLoaded", generateProducts);
