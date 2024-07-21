import { cart, removeFromCart } from "./data/cart.js";
import { convertMoney } from "./utils/money.js";
import { products } from "./products.js";

let cartSummaryHTML = "";
function renderOrderSummary() {
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    cartSummaryHTML += `
    <div class="products js-products-${productId.name}">
      <div class="product-name">
        ${matchingProduct.name}
        <div>
          <img src="${matchingProduct.image}" class="product-image" />
        </div>
      </div>
      <div class="product-description">
        ${matchingProduct.description}
        <div class="products-info">
          liczba produktów ${cartItem.quantity}
          <button class="delete-button js-delete-button" data-product-id="${matchingProduct.id}">
            Usuń z koszyka
          </button>
        </div>
    </div>
  `;
  });
  document.querySelector(".js-main-checkout-page").innerHTML = cartSummaryHTML;

  return cartSummaryHTML;
}

renderOrderSummary();

document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-products-${productId.name}`);
    container.remove();
    function updateCartQuantity() {
      let cartQuantity = 0;
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });
    }
  });
});
