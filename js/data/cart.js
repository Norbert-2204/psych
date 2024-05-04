export let cart = "";

if (!cart) {
  cart = [
    {
      productId: "fjkv-#8%p-pafd",
      quantity: 1,
    },
    {
      productId: "ldeo-$#*f-p!di",
      quantity: 1,
    },
  ];
}

// function saveToStorage() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
}
