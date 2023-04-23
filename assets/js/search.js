// let products = {
//     data: [
//         {
//         productName: "Crop Top",
//         category: "Tops",
//         price: "$20.5",
//         image: "assets/images/61EGrDIKbdL._AC_SX385_.jpg",
//     },
//     {
//         productName: "Bum Shorts",
//         category: "Bottom-wears",
//         price: "$70.5",
//         image: "assets/images/IMG-20230412-WA0024.jpg",
//     },
//     {
//         productName: "Jean Jacket",
//         category: "Jackets",
//         price: "$90.5",
//         image: "assets/images/IMG-20230412-WA0025.jpg",
//     },
//     {
//         productName: "Cargo Joggers",
//         category: "Bottom-wears",
//         price: "$90.5",
//         image: "assets/images/IMG-20230412-WA0026.jpg",
//     },
//     {
//         productName: "Dark Joggers",
//         category: "Bottom-wears",
//         price: "$21.5",
//         image: "assets/images/IMG-20230412-WA0027.jpg",
//     },
//     {
//         productName: "Fitted Joggers",
//         category: "Bottom-wears",
//         price: "$27.5",
//         image: "assets/images/IMG-20230412-WA0028.jpg",
//     },
//     {
//         productName: "Checked T-Shirts",
//         category: "Bottom-wears",
//         price: "$25.5",
//         image: "assets/images/IMG-20230412-WA0029.jpg",
//     },
//     {
//         productName: "Chinos Bum Short",
//         category: "Bottom-wears",
//         price: "$5.5",
//         image: "assets/images/IMG-20230412-WA0030.jpg",
//     },
//     {
//         productName: "Bum Shorts",
//         category: "Bottom-wears",
//         price: "$70.5",
//         image: "assets/images/IMG-20230412-WA0031.jpg",
//     },
//     {
//         productName: "Female Baggy",
//         category: "Bottom-wears",
//         price: "$50.5",
//         image: "assets/images/IMG-20230412-WA0032.jpg",
//     },
//     {
//         productName: "Female Jeans",
//         category: "Bottom-wears",
//         price: "$64.5",
//         image: "assets/images/IMG-20230412-WA0033.jpg",
//     },
//     {
//         productName: "Blue Jean Shorts",
//         category: "Bottom-wears",
//         price: "$30.5",
//         image: "assets/images/IMG-20230412-WA0034.jpg",
//     },
//     {
//         productName: "Female Plain Jeans",
//         category: "Bottom-wears",
//         price: "$40.5",
//         image: "assets/images/IMG-20230412-WA0035.jpg",
//     },
//     {
//         productName: "Joggers",
//         category: "Bottom-wears",
//         price: "$38.5",
//         image: "assets/images/IMG-20230412-WA0036.jpg",
//     },
//     {
//         productName: "Checked T-Shirt",
//         category: "Tops",
//         price: "$74.5",
//         image: "assets/images/IMG-20230412-WA0037.jpg",
//     },
//     {
//         productName: "Customised Crop Top",
//         category: "Tops",
//         price: "$38.5",
//         image: "assets/images/IMG-20230412-WA0038.jpg",
//     },
//     {
//         productName: "White Customised Crop Top",
//         category: "Tops",
//         price: "$38.5",
//         image: "assets/images/IMG-20230412-WA0039.jpg",
//     },
//     {
//         productName: "Baggy Jeans",
//         category: "Bottom-wears",
//         price: "$48.5",
//         image: "assets/images/IMG-20230412-WA0040.jpg",
//     },
//     {
//         productName: "Combat Trousers",
//         category: "Bottom-wears",
//         price: "$55.5",
//         image: "assets/images/IMG-20230412-WA0041.jpg",
//     },
//     {
//         productName: "Nike Joggers",
//         category: "Bottom-wears",
//         price: "$56.5",
//         image: "assets/images/IMG-20230412-WA0042.jpg",
//     },
//     {
//         productName: "Crazy Jeans",
//         category: "Bottom-wears",
//         price: "$57.5",
//         image: "assets/images/IMG-20230412-WA0043.jpg",
//     },
//     {
//         productName: "Long Plain Jeans",
//         category: "Bottom-wears",
//         price: "$54.5",
//         image: "assets/images/IMG-20230412-WA0044.jpg",
//     },
//     {
//         productName: "White Bum Shorts",
//         category: "Bottom-wears",
//         price: "$76.5",
//         image: "assets/images/IMG-20230412-WA0045.jpg",
//     },
// ],
// };

// for (let i of products.data){
//     //create card
//     let card = document.createElement("div");
//     //card should have category and should stay hidden initially
    
//     card.classList.add("card", i.category, "hide");
//     //image-div
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     let container = document.createElement("div");
//     container.classList.add("container");
//     //product name
//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);
//     //price
//     let price = document.createElement("h6");
//     price.innerText = i.price;
//     container.appendChild(price);


//     card.appendChild(container);
//     document.getElementById("products").appendChild(card);
// }

// //parameter passed from button (parameter same as category)
// function filterProduct(value) {
//     //button class code
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//         //check if value equals innerText
//         if (value.toUpperCase() == button.innerText.toUpperCase()) {
//             button.classList.add("active");
//         }
//         else{
//             button.classList.remove("active");
//         }
//     });

//     //select all cards 
//     let elements = document.querySelectorAll(".card");
//     //loop throuhj all cards
//     elements.forEach((element) => {
//         //display all cards on 'all' button click
//         if(value == "all"){
//             element.classList.remove("hide");
//         }
//         else{
//             //check if element contain category class
//             if (element.classList.contains(value)){
//                 //display element based on category
//                 element.classList.remove("hide");
//             }
//             else{
//                 //hide other elements
//                 element.classList.add("hide");
//             }
//         }
//     });

// }

// //search button click
// // document.getElementById("search")

// //initially display all products
// window.onload = () => {
//     filterProduct("all");
// };






// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="utf-8" />
//   <title>Swiper demo</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
//   <!-- Link Swiper's CSS -->
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

//   <!-- Demo styles -->
//   <style>
//     html,
//     body {
//       position: relative;
//       height: 100%;
//     }

//     body {
//       background: #eee;
//       font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//       font-size: 14px;
//       color: #000;
//       margin: 0;
//       padding: 0;
//     }

//     .swiper {
//       width: 100%;
//       padding-top: 50px;
//       padding-bottom: 50px;
//     }

//     .swiper-slide {
//       background-position: center;
//       background-size: cover;
//       width: 300px;
//       height: 300px;
//     }

//     .swiper-slide img {
//       display: block;
//       width: 100%;
//     }
//   </style>
// </head>

// <body>
//   <!-- Swiper -->
//   <div class="swiper mySwiper">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//       </div>
//       <div class="swiper-slide">
//         <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//       </div>
//     </div>
//     <div class="swiper-pagination"></div>
//   </div>

//   <!-- Swiper JS -->
//   <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

//   <!-- Initialize Swiper -->
//   <script>
//     var swiper = new Swiper(".mySwiper", {
//       effect: "coverflow",
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: "auto",
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//       },
//     });
//   </script>
// </body>

// </html>
