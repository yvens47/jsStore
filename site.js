var products = [
  {
    id: "1",
    name: "Nike Air Max 270 React (Reggae)",
    description: "1escription 1",
    genre: "male",
    price: "45",
    images: {
      defaut:
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zysrzf8tplx1rrikinuk/air-max-270-react-reggae-mens-shoes-DcpzJF.jpg",
      list: [
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a2dwl34ko4uqtt0xawfa/air-max-270-react-punk-rock-mens-shoe-DcpzJF.jpg",
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rdwztrjkkq8brghoshkn/air-max-270-react-electronic-music-mens-shoes-DcpzJF.jpg"
      ]
    },
    color: ["red", "blue Green ", "pink"],
    type: "Men shoes"
  },
  {
    id: "2",
    name: "Nike Zoom Fly 3",
    description: "1escription 1",
    genre: "unisex",
    price: "8.90",
    images: {
      defaut:
        "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cymb4xvvajcvrzxuskfp/joyride-run-flyknit-mens-running-shoe-LcCzGq.jpg",
      list: [
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/espcz6icmjrewdc29bb4/zoom-fly-3-mens-running-shoe-xCbsJ0.jpg",
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/wa4li7j8fjwipwwjonyw/zoom-fly-3-mens-running-shoe-xCbsJ0.jpg",
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ibezrefmlstjtc8etshr/zoom-fly-3-mens-running-shoe-xCbsJ0.jpg"
      ]
    },
    color: ["red", "blue Green ", "pink"],
    type: "Men running shoes"
  },
  {
    id: "3",
    name: "product 3",
    description: "1escription 1",
    genre: "female",
    price: "233.99",
    images: {
      defaut:
        "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i8vecggn51jcpoarwtw8/joyride-flyknit-cc3-obj-shoe-LPGQk6.jpg",
      list: ["image 1", "image 2"]
    },
    color: ["pink", "blue ", "pink"],
    type: "Men shoes"
  },
  {
    id: "4",
    name: "product 4",
    description: "1escription 1",
    genre: "male",
    price: "45",
    images: {
      defaut:
        "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iiafzj3eynywecv7kzbu/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg",
      list: ["image 1", "image 2"]
    },
    color: ["red", "blue Green ", "pink"],
    type: "Men shoes"
  },
  {
    id: "5",
    name: "product 5",
    description: "1escription 1",
    genre: "male",
    price: "45",
    images: {
      defaut:
        "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iiafzj3eynywecv7kzbu/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg",
      list: ["image 1", "image 2"]
    },
    color: ["red", "blue Green ", "pink"],
    type: "Men shoes"
  },
  {
    id: "6",
    name: "product 6",
    description: "1escription 6",
    genre: "female",
    price: "45.34",
    images: {
      defaut:
        "data:image/jpeg;base64,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",
      list: ["image 1", "image 2"]
    },
    color: ["red", "blue Green ", "pink"],
    type: "Female shoes"
  }
];

function dataStorage() {
  var localStorage = window.localStorage;
  localStorage.setItem("products", JSON.stringify(products));

  return localStorage;
}

// all  html elements
var UI = (function() {
  //takes and an object with productId, productName, productPrice productImages
  //return a html li
  var createProduct = function(productDataObject) {
    // create list element;
    var product = document.createElement("li");
    product.classList.add("product");
    product.className = "col-md-3 product px-0";
    //product.style = 'width:24%';

    // product wrapper
    var productWrapper = document.createElement("div");
    productWrapper.classList.add("product_wrapper");
    // product wrapper
    var productImage = document.createElement("img");
    productImage.classList.add("image");
    productImage.src = productDataObject.images.defaut;
    //link
    // document.createElement('a').appendChild(productImage)
    // add image to product_wrapper div
    productWrapper.appendChild(productImage);

    var productData = document.createElement("div");
    productData.classList.add("product-data");

    var pDataTitle = document.createElement("div");
    pDataTitle.classList.add("pdata-title");
    // name

    var productName = document.createElement("p");
    productName.classList.add("name");
    var id = productDataObject.id;

    productName.innerHTML =
      `<a href='product.php?id=${id}' data-id=''>` +
      productDataObject.name +
      "</a>";

    var productType = document.createElement("p");
    productType.classList.add("type");
    productType.innerHTML = productDataObject.type;

    //price
    var pDataPrice = document.createElement("div");
    pDataPrice.classList.add("pdata-price");
    var productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.innerHTML = "$" + productDataObject.price;
    pDataPrice.appendChild(productPrice);

    pDataTitle.appendChild(productName);
    pDataTitle.appendChild(productType);

    var productData = document.createElement("div");
    productData.classList.add("product-data");

    productData.appendChild(pDataTitle);
    productData.appendChild(pDataPrice);
    // productData.appendChild(pDataTitle);

    //add productData to Product_wrapper div
    productWrapper.appendChild(productData);

    product.appendChild(productWrapper);

    var addBtn = document.createElement("button");
    addBtn.className = "btn btn-info addToCart";
    addBtn.innerText = "Add to Cart";
    addBtn.setAttribute("data-id", productDataObject.id);
    product.appendChild(addBtn);

    var link = document.createElement("a");

    return product;
  };

  // html element
  var productsUl = document.querySelector(".products");
  var productsPage = document.querySelector(".products-page");
  var cartLink = document.querySelector(".cart-link");
  var genre = document.querySelector("#genre");
  var productList = document.querySelectorAll(".product"); // li product on app.php

  // add all html  element above the array
  var uiContainer = [productsUl, productsPage, cartLink, genre, productList];

  return {
    uiList: uiContainer,
    createProduct: createProduct
  };
})();

class Cart {
  constructor() {
    this.state = {
      cart: []
    };
  }
}

class Product {
  constructor() {
    this.products = products.slice();
  }

  filterProducts(products, filter) {
    if (filter === "all") return products;

    const filteredProducts = products.filter(
      product => product.genre === filter
    );

    return filteredProducts;
  }

  totalProducts() {
    console.log(this.products.length);
  }
}

var app = (function(ui) {
  var product = new Product();
  // save product to local storage;
  //dataStorage();
  var ulLists = ui.uiList;
  //display each product from products
  var cart;
  var carStorage = window.localStorage;

  if (carStorage.getItem("cart")) {
    cart = JSON.parse(carStorage.getItem("cart"));
  } else {
    cart = [];
  }
  var cartUpdate = document.querySelector(".cart");
  cartUpdate.innerHTML = cart.length;

  displayAllProductsToUI(product.filterProducts(products, "all"), ulLists, ui);
  // console.log(ulLists[2])
  var addToCartBtns = document.querySelectorAll(".addToCart"); // select all buttons

  // filter product array  when select is change
  ulLists[3].addEventListener("change", function(e) {
    addToCartBtns = null; // reset all addtocart btns

    document.querySelector(".products").innerHTML = "";
    var productList = document.querySelectorAll(".product"); // li product on app.php

    // filter results into resultset variable
    const resultSet = product.filterProducts(
      products,
      e.target.value.toLowerCase()
    );

    document.querySelector(".info").innerHTML =
      "<h2> There are " + resultSet.length + " in this category<h2>";

    displayAllProductsToUI(resultSet, ulLists, ui); // display new filtered result to doc
    var addToCartBtns = document.querySelectorAll(".addToCart"); //get the nee addtocart btns

    addToCartBtnEvent(addToCartBtns, resultSet, cart, cartUpdate, carStorage); // add newvents
  });

  var cartDisplayDiv = document.querySelector(".modal-body-ul");

  // add click event to cart link
  ulLists[2].addEventListener("click", function() {
    viewCartItems();
  });

  // window.localStorage.setItem('cart', JSON.stringify(cart));

  addToCartBtnEvent(addToCartBtns, products, cart, cartUpdate, carStorage);

  // view cart items
  function viewCartItems() {
    var items = JSON.parse(window.localStorage.getItem("cart"));
    if (items.length === 0) {
      alert("your cart is empty");
    } else {
      items.forEach(function(value) {
        var productItem = document.createElement("li"); // crate list item
        productItem.innerHTML = value[0].name + " " + "$" + value[0].price;

        cartDisplayDiv.appendChild(productItem); //add to unordered list
      });
    }
  }
})(UI);

function addToCartBtnEvent(
  addToCartBtns,
  resultSet,
  cart,
  cartUpdate,
  carStorage
) {
  addToCartBtns.forEach(function(button) {
    // add event Listener to each add to Cart Button
    button.addEventListener("click", function(e) {
      e.target.innerHTML = "Added";
      e.target.setAttribute("disabled", false);
      var productID = e.target.getAttribute("data-id"); // product id from  button attribute

      var product = findAproductById(resultSet, productID);
      //console.log(product);

      // add new product  cart
      cart.push(product);
      cartUpdate.innerHTML = cart.length;
      carStorage.setItem("cart", JSON.stringify(cart));
      console.log(JSON.parse(JSON.stringify(cart)));
    });
    //cartUpdate.innerHTML = cart.length;
  });
}

// display all products to the screen
function displayAllProductsToUI(arrayProduct, ulLists, ui) {
  var products = arrayProduct;
  if (ulLists[0] !== null || uiList[0] !== undefined) {
    products.forEach(function(item, index) {
      //add list the ul element
      ulLists[0].appendChild(ui.createProduct(item));
    });
  }
}

// product by id
function findAproductById(array, id) {
  const result = array.filter(function(product) {
    if (product.id === id) {
      return product;
    }
  });

  return result;
}
