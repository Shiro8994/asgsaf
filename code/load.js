
fetch("./code/ProductData.json")
    .then((response) => {
        if (!response.ok) throw new Error(`INVALID JSON ${response.status}`);
        return response.json();
    })

    .then((data) => {
        const params = new URLSearchParams(window.location.search);
        const index = params.get("product");

        if (index === null) {
            console.error("No product index in URL");
            return;
        }

        // Find which product group matches the page
        const currentPage = window.location.pathname.split("/").pop();
        let group;

        switch (currentPage) {
            case "viewProduct.html":   // ✅ This page will always read from one group
                group = data.Product[0]; // change if needed
                break;
            default:
                console.warn("Unexpected page:", currentPage);
                return;
        }

        // Now get the specific product
        const picked = Object.values(group)[index];
        if (!picked) {
            console.error("Invalid index, no product found");
            return;
        }
        renderProduct(picked);
    })
    .catch((err) => console.error("Fetch Error:", err.message));


let goToProduct = (index) => {
    window.location.href = `viewProduct.html?product=${index}`;}


function renderProduct(product) {
    const section = document.querySelector(".product-main");
    section.innerHTML = `
    <img src="${product.ImageSource}" class="product-image"/>

    <div class="product-info">
      <h1 class="prod-name">${product.ProductName}</h1>
      <div class="star-rating">${product.Rating}</div>
      <h3 class="prod-price">Price: ₱${product.Price}</h3>
      <ul class="prod-specs">
        <li><b>Display: </b>${product.Specs.Display}</li>
        <li><b>Chip: </b>${product.Specs.Chip}</li>
        <li><b>Memory: </b>${product.Specs.Memory}</li>
        <li><b>Storage: </b>${product.Specs.Storage}</li>
        <li><b>Battery Life: </b>${product.Specs.Battery_Life}</li>
        <li><b>Ports: </b>${product.Specs.Ports}</li>
        <li><b>Operating System: </b>${product.Specs.OS}</li>
      </ul>

      <div class="color-picker"><label>Colors:</label>
        <button class="color-circle1" style="background-color: #2a2f39;" aria-label="Black"></button>
        <button class="color-circle" style="background-color: #e5e5e5;" aria-label="Gray"></button>
      </div>

      <div class="prod-size">
        Size:
        <button class="size1">14-inch</button>
        <button class="size2">16-inch</button>
      </div>

      <div class="quantity-container">
        <label for="quantity">Quantity:</label>
        <div class="quantity-box">
          <button class="quantity-btn">−</button>
          <input type="number" id="quantity" class="quantity-input" value="1" readonly>
          <button class="quantity-btn">+</button>
        </div>
      </div>

      <div class="button-group">
        <button class="buy">Buy Now</button>
        <button class="add">Add Cart</button>
      </div>
    </div>
  `;
    //even listener for buy button
    const buyNowBtn = section.querySelector(".buy");
    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", function () {
            window.location.href = "checkoutProcess.html";
        });
    }

    const addToCartBtn = section.querySelector(".add");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            window.location.href = "cartpage.html";
        });
    }

}

