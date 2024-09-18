
const searchInput = document.querySelector(".searchInput");
const menuItems = document.querySelectorAll(".menuItem"); // The list of shoe names in the navigation
const wrapper = document.querySelector(".sliderWrapper"); // Slider wrapper to hide/show shoes
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0]; // Initially selected product

// Function to filter shoes based on search query
searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.toLowerCase(); // Get search query
  menuItems.forEach((item, index) => {
    const productTitle = products[index].title.toLowerCase();
    if (productTitle.includes(searchQuery)) {
      // If shoe matches the search query, show the slider item
      item.style.display = "block";
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
    } else {
      // If shoe doesn't match, hide the slider item
      item.style.display = "none";
    }
  });
});


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});




currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    // Select the current image (old shoe)
    const currentImg = document.querySelector(".productImg.fadeInUp.active");

    // Create a new image element for the new shoe color
    const newImg = new Image();
    newImg.src = choosenProduct.colors[index].img;
    newImg.classList.add("productImg", "fadeInUp");

    // Append the new image on top of the current image
    const imgWrapper = document.querySelector(".productImgWrapper");
    imgWrapper.appendChild(newImg);

    // Start the fade-in for the new image
    setTimeout(() => {
      newImg.classList.add("active");   // Fade in the new image
    }, 50); // Small delay to allow DOM update

    // Start fading out the old image after the new image fully appears
    setTimeout(() => {
      currentImg.classList.add("fadeOutUp"); // Fade out the old image
    }, 750); // Delay the fade-out to match the new image reveal (0.7s)

    // Remove the old image after its fade-out completes
    setTimeout(() => {
      imgWrapper.removeChild(currentImg); // Remove old image after fade-out
    }, 1500); // Give time for the old image to fade out (0.7s after new image appears)
  });
});










currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
