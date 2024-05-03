import { products } from "./products.js";
import { convertMoney } from "./utils/money.js";

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
    <button class="add-to-cart-button">Dodaj do koszyka</button>
  </div>
</div>
  `;
});

document.querySelector(".js-main-shop").innerHTML = ProductsHTML;
