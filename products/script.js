let products = [
  {
    id: 1,
    img: "../images/bottle1.jpg",
    item: "R2,490",
    name: "Feeding bottle 1",
    price: "DKK 350",
  },
  {
    id: 2,
    img: "../images/bottle2.webp",
    item: "R325",
    name: "Feeding bottle 2",
    price: "DKK 550",
  },
  {
    id: 3,
    img: "../images/bottle3.webp",
    item: "R490",
    name: "Feeding bottle 3",
    price: "DKK 390",
  },
  {
    id: 4,
    img: "../images/pacifier1.webp",
    item: "R115",
    name: "Pacifier 1",
    price: "DKK 300",
  },
  {
    id: 5,
    img: "../images/pacifier2.jpg",
    item: "R105",
    name: "Pacifier 2",
    price: "DKK 250",
  },
  {
    id: 6,
    img: "../images/pacifier3.webp",
    item: "R117",
    name: "Pacifier 3",
    price: "DKK 450",
  },
  {
    id: 7,
    img: "../images/bottle1.jpg",
    item: "R2,480",
    name: "Feeding bottle 4",
    price: "DKK 450",
  },
  {
    id: 8,
    img: "../images/bottle2.webp",
    item: "R375",
    name: "Feeding bottle 5",
    price: "DKK 750",
  },
  {
    id: 9,
    img: "../images/bottle3.webp",
    item: "R790",
    name: "Feeding bottle 6",
    price: "DKK 290",
  },
  {
    id: 10,
    img: "../images/pacifier1.webp",
    item: "R815",
    name: "Pacifier 4",
    price: "DKK 700",
  },
  {
    id: 11,
    img: "../images/pacifier2.jpg",
    item: "R125",
    name: "Pacifier 5",
    price: "DKK 259",
  },
  {
    id: 12,
    img: "../images/pacifier3.webp",
    item: "R112",
    name: "Pacifier 6",
    price: "DKK 470",
  },
];
let productDiv = document.getElementById("product");
function generateProducts() {
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

// sort
const low = document.getElementById("low");
const high = document.getElementById("high");
const namePrd = document.getElementById("name");
const drpbtn = document.getElementById("drpbtn");

low.addEventListener("click", () => {
  products.sort((a, b) => {
    return Number(a.price.slice(-3)) - Number(b.price.slice(-3));
  });
  drpbtn.innerText = "Low Price";
  productDiv.innerHTML = "";
  return generateProducts();
});

high.addEventListener("click", () => {
  products.sort((a, b) => {
    return Number(b.price.slice(-3)) - Number(a.price.slice(-3));
  });
  drpbtn.innerText = "high Price";
  productDiv.innerHTML = "";
  return generateProducts();
});

namePrd.addEventListener("click", () => {
  products.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  drpbtn.innerText = "Name";
  productDiv.innerHTML = "";
  return generateProducts();
});

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

function removeFunc(index) {
  cartItems.splice(index, 1);
  return pushCartItems();
}

// searchbar
const inpt = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const query = inpt.value.toLowerCase().trim();

  productDiv.innerHTML = "";
  inpt.value = "";

  if (query !== "") {
    const filteredProducts = products.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.item.toLowerCase().includes(query)
    );

    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
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
    } else {
      productDiv.innerHTML = `<p class="error">No products found for "${query}"</p>
      <button  class="redirectbtn"><a href="products.html">Go back to products page</a></button>
      `;
    }
  } else {
    generateProducts();
  }
});
