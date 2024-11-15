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
    id: 5,
    img: "images/pacifier2.jpg",
    item: "R105",
    name: "Pacifier 2",
    price: "DKK 250",
  },
  {
    id: 6,
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
    itemElement.setAttribute("id", product.id);
    itemElement.classList.add("productItems");
    itemElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <h1>${product.item}</h1>
    <p>${product.name}</p>
      <p class="price">${product.price}</p>
      <button class="addToCart">Add to Cart</button>
    `;
    productDiv.appendChild(itemElement);
  });
}

document.addEventListener("DOMContentLoaded", generateProducts);

//cart
const cart = document.getElementById("cart");
const cartList = document.getElementById("cartlist");
const closeCart = document.getElementById("close");
const addToCart = document.getElementsByClassName("addToCart");
const cartListItems = document.querySelector(".cartListItems");
let totalAmount = document.getElementById("totalAmount");
let cartItems = [];

function pushCartItems() {
  cartListItems.innerHTML = "";
  totalAmount.innerText = "";
  let currentTotal = totalAmount.innerText
    ? parseInt(totalAmount.innerText)
    : (totalAmount.innerText = +0);
  if (cartItems) {
    cartItems.forEach((item, index) => {
      const cartListItem = document.createElement("div");
      cartListItem.setAttribute("id", `${item.id}`);
      cartListItem.innerHTML = `
      <div>
    <img src="${item.img}" alt="${item.name}" />
    </div>
    <div>
    <h1>${item.item}</h1>
    <p>${item.name}</p>
    <p class="price">${item.price}</p>
    </div>
    <div class="removeProduct" onclick=removeFunc(${index})>
    remove
    </div>
    `;
      cartListItems.appendChild(cartListItem);

      // update Total
      currentTotal += parseInt(item.price.slice(-3));
      // console.log(currentTotal);
      totalAmount.innerText = currentTotal;
    });
  }
}
cart.addEventListener("click", () => {
  cartList.style.display = "block";
  pushCartItems();
});

closeCart.addEventListener("click", () => {
  cartList.style.display = "none";
});

document.getElementById("product").addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("addToCart")) {
    const itemId = event.target.parentNode.getAttribute("id");

    products.find((val) => {
      if (val.id == itemId) {
        cartItems.push(val);
        alert(val.name + " has been added to cart");
        pushCartItems();
      }
    });
  }
});

// remove button
function removeFunc(index) {
  cartItems.splice(index, 1);
  return pushCartItems();
}
