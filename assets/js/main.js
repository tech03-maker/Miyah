"use strict";
const loader = document.getElementById("preloader");
setTimeout(() => {
  loader.style.display = "none";
}, 5000);

// OPEN & CLOSE CART
const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const cartNo = document.querySelector(".cart-no");
const totalElement = cart.querySelector(".total-price");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

if (document.raedyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

function start() {
  addEvents();
}

async function update() {
  await addEvents();
  cartNo.textContent = itemsAdded.length;

  updateTotal();
}

function addEvents() {
  //REMOVE ITEMS FROM CART
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });

  //change item quantity
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  //add item to cart
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  //Buy order
  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_buyOrder);
}

//HANDLE EVENTS FUNCTIONS
let itemsAdded = [];
function handle_addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let ImgSrc = product.querySelector(".product-img").src;
  console.log(title, price, ImgSrc);

  let newToAdd = {
    title,
    price,
    ImgSrc,
  };

  console.log(itemsAdded, newToAdd);
  //handle item is already existed
  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("This Item is Added To Cart Already!");
    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  //Add product to cart
  let cartBoxElement = CartBoxComponent(title, price, ImgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}
function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); //to keep it integer

  update();
}

function handle_buyOrder() {
  if (itemsAdded.length <= 0) {
    alert("There is No Order To Place \nPlease Make an Order Now!");
    return;
  }

  // random reference
  let randomNumber;
  for (let i = 0; i < 10; i++) {
    randomNumber = Math.random();
    console.log(randomNumber);
  }

  var handler = PaystackPop.setup({
    key: "pk_live_5d2c90108a7deea456681e80126226cc07c6c5e1",
    email: "abdulrohufislamiyyah@gmail.com",
    amount: Number(totalElement.innerHTML.substring(1)) * 100,
    currency: "NGN",
    ref: randomNumber,
    metadata: {
      custom_fields: [
        {
          display_name: "I-TECH",
          variable_name: "JUMAH MUHAMMED",
          value: "J Tech",
        },
      ],
    },
    callback: function (response) {
      // handle the response from Paystack
      fetch("https://api.paystack.co/transaction/verify/:reference", {
        headers: {
          Authorization: "sk_live_aba9e75b0550fa9fc333c7eeabd4a0e4fdc345c2",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response?.data.status === "success") {
            window.location.href = `assets/pages/confirmationpage.html`;
          }
        })
        .catch((error) => alert("Transaction failed"));

      console.log(response);
    },
    onClose: function () {
      // handle the case where the user closes the Paystack window
      console.log("Payment window closed");
    },
  });

  handler.openIframe();

  // callback: function CallBack(response) {
  //     // handle the response from Paystack
  //     console.log(response);

  //     // redirect the customer to the confirmation page
  //
  //   }
  // const cartContent = cart.querySelector(".cart-content");
  // cartContent.innerHTML = '';
  // alert("Your Order Has Been Placed Successfully! :)");

  update();
}

//UPDATE AND RERENDER FUNCTIONS

function updateTotal() {
  let total = 0;
  let cartBoxes = document.querySelectorAll(".cart-box");

  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });
  console.log(total);
  //keep 2digits after the decimal points
  total = total.toFixed(2);

  totalElement.innerHTML = "$" + total;
}

// HTML COMPONENTS
function CartBoxComponent(title, price, ImgSrc) {
  return `
    <div class="cart-box">
                        <img src=${ImgSrc} alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa fa-trash-alt cart-remove"></i>
                    </div>`;
}
