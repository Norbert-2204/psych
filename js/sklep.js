import { products } from "./products.js";
import { convertMoney } from "./utils/money.js";
import { cart, addToCart } from "./data/cart.js";

let ProductsHTML = "";
products.forEach((product) => {
  ProductsHTML += `
  <div class="product-info">
  <div class="product-placement">
    ${product.name}
    <div>
      <img class="product-image" src="${product.image}" />
    </div>
  </div>
  <div class="product-description">${product.description}</div>
  <div class="product-price">
    ${convertMoney(product.priceGrosz)} PLN
    <button class="add-to-cart-button js-add-to-cart-button" data-product-id="${
      product.id
    }">Dodaj do koszyka</button>
  </div>
</div>
  `;
});

document.querySelector(".js-main-shop").innerHTML = ProductsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  console.log(cartQuantity);
}
updateCartQuantity();

document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const { productId } = button.dataset;
    addToCart(productId);
    updateCartQuantity();
  });
});
