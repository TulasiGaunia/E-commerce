let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  updateCartDisplay();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);

  updateCartDisplay();
}

function updateCartDisplay() {
  // Update cart count
  document.getElementById("cart-count").innerText = cart.length;

  // Update cart items list
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // clear previous
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.product} - $${item.price} <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
  });

  // Update total
  document.getElementById("cart-total").innerText = total;
}
