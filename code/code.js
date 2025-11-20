document.addEventListener("DOMContentLoaded", function() {

  //Buy and Add to Cart
  const buyNowBtn = document.querySelector(".buy");
  const addToCartBtn = document.querySelector(".add");

  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", function() {
      window.location.href = "checkoutProcess.html"; 
    });
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function() {
      window.location.href = "cartpage.html"; 
    });
  }

  // Product Page
  const productLinks = {
    "MacPro": "MacPro.html",
    "MacAir": "MacAir.html",
    "iMac": "iMac.html",
    "ProDisplay": "ProDisplay.html",
    "iPhone17Pro": "iPhone17Pro.html",
    "iPhoneAir": "iPhoneAir.html",
    "iPhone17": "iPhone17.html",
    "iPhone16": "iPhone16.html",
    "iPhone16e": "iPhone16e.html",
    "iPadPro": "iPadPro.html",
    "iPadAir": "iPadAir.html",
    "iPad": "iPad.html",
    "iPadMini": "iPadMini.html",
    "AWS11": "AWS11.html",
    "AWSE3": "AWSE3.html",
    "AWHS11": "AWHS11.html",
    "AWHU3": "AWHU3.html",
    "AWU3": "AWU3.html"
  };

  for (const [id, page] of Object.entries(productLinks)) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function() {
        window.location.href = page;
      });
    }
  }

  // Cart Page
  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function() {
      window.location.href = "checkoutProcess.html";
    });
  }

  const removeBtn = document.querySelector(".remove-btn");
  if (removeBtn) {
    removeBtn.addEventListener("click", function() {
      const cartItem = removeBtn.closest(".cart-item");
      if (cartItem) {
        cartItem.remove();
        console.log("Item removed from cart.");
      }

      const remainingItems = document.querySelectorAll(".cart-item").length;
      if (remainingItems === 0) {
        const section = document.querySelector(".cart-section");
        section.innerHTML = "<h2>Your cart is empty</h2>";
      }
    });
  }

  // Main Checkout Page
  const cancelOrderBtn = document.querySelector(".cancel-order");
  if (cancelOrderBtn) {
    cancelOrderBtn.addEventListener("click", function() {
      const orderCard = cancelOrderBtn.closest(".checkout-card");
      if (orderCard) {
        orderCard.remove();
        alert("Your order has been canceled");
      }

      const remainingOrders = document.querySelectorAll(".checkout-card").length;
      if (remainingOrders === 0) {
        const section = document.querySelector(".checkout-section");
        section.innerHTML = "<h2>You currently have no active orders</h2>";
      }
    });
  }

  // Checkout Process Page
  const checkoutForm = document.querySelector(".checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function(e) {
      e.preventDefault();

      // Validate all inputs
      const inputs = checkoutForm.querySelectorAll("input[required], select[required]");
      let allFilled = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          allFilled = false;
        }
      });

      if (!allFilled) {
        alert("Please fill out all required fields.");
        return;
      }

      alert("Purchase successful!");
      window.location.href = "MainCheckOutpage.html";
    });
  }

  console.log("code.js loaded successfully!");

});