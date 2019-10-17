

var products = [

    {
        id: "1", name: "Nike Air Max 270 React (Reggae)", description: "1escription 1", genre: "male",
        price: "45", images: {
            defaut: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zysrzf8tplx1rrikinuk/air-max-270-react-reggae-mens-shoes-DcpzJF.jpg", list: ['https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a2dwl34ko4uqtt0xawfa/air-max-270-react-punk-rock-mens-shoe-DcpzJF.jpg', 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rdwztrjkkq8brghoshkn/air-max-270-react-electronic-music-mens-shoes-DcpzJF.jpg'],
        }, color: ['red', 'blue Green ', 'pink'], type: "Men shoes",
    },
    {
        id: "2", name: "Nike Zoom Fly 3", description: "1escription 1", genre: "unisex",
        price: "8.90", images: { defaut: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cymb4xvvajcvrzxuskfp/joyride-run-flyknit-mens-running-shoe-LcCzGq.jpg", list: ['https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/espcz6icmjrewdc29bb4/zoom-fly-3-mens-running-shoe-xCbsJ0.jpg', 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/wa4li7j8fjwipwwjonyw/zoom-fly-3-mens-running-shoe-xCbsJ0.jpg', 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ibezrefmlstjtc8etshr/zoom-fly-3-mens-running-shoe-xCbsJ0.jpg'] }, color: ['red', 'blue Green ', 'pink'], type: "Men running shoes",
    },
    {
        id: "3", name: "product 3", description: "1escription 1", genre: "female",
        price: "233.99", images: { defaut: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i8vecggn51jcpoarwtw8/joyride-flyknit-cc3-obj-shoe-LPGQk6.jpg", list: ['image 1', 'image 2'] }, color: ['pink', 'blue ', 'pink'], type: "Men shoes",
    },
    {
        id: "4", name: "product 4", description: "1escription 1", genre: "male",
        price: "45", images: { defaut: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iiafzj3eynywecv7kzbu/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg", list: ['image 1', 'image 2'] }, color: ['red', 'blue Green ', 'pink'], type: "Men shoes",
    },
    {
        id: "5", name: "product 5", description: "1escription 1", genre: "male",
        price: "45", images: { defaut: "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/iiafzj3eynywecv7kzbu/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg", list: ['image 1', 'image 2'] }, color: ['red', 'blue Green ', 'pink'], type: "Men shoes",
    },
];

function dataStorage() {
    var localStorage = window.localStorage;
    localStorage.setItem('products', JSON.stringify(products));

    return localStorage;
}


// all  html elements
var UI = (function () {

    //takes and an object with productId, productName, productPrice productImages

    var createProduct = function (productDataObject) {

        // create list element;
        var product = document.createElement('li')
        product.classList.add('product');
        product.className = 'col-md-3 product px-0';
        //product.style = 'width:24%';

        // product wrapper
        var productWrapper = document.createElement('div')
        productWrapper.classList.add('product_wrapper');
        // product wrapper
        var productImage = document.createElement('img')
        productImage.classList.add('image');
        productImage.src = productDataObject.images.defaut;
        //link 
        // document.createElement('a').appendChild(productImage)
        // add image to product_wrapper div
        productWrapper.appendChild(productImage);

        var productData = document.createElement('div')
        productData.classList.add('product-data');


        var pDataTitle = document.createElement('div')
        pDataTitle.classList.add('pdata-title');
        // name

        var productName = document.createElement('p');
        productName.classList.add('name');
        var id = productDataObject.id;

        productName.innerHTML = `<a href='product.php?id=${id}' data-id=''>` + productDataObject.name + "</a>";


        var productType = document.createElement('p');
        productType.classList.add('type');
        productType.innerHTML = productDataObject.type;



        //price
        var pDataPrice = document.createElement('div')
        pDataPrice.classList.add('pdata-price');
        var productPrice = document.createElement('p');
        productPrice.classList.add('price');
        productPrice.innerHTML = "$" + productDataObject.price;
        pDataPrice.appendChild(productPrice);


        pDataTitle.appendChild(productName);
        pDataTitle.appendChild(productType);

        var productData = document.createElement('div')
        productData.classList.add('product-data');

        productData.appendChild(pDataTitle);
        productData.appendChild(pDataPrice);
        // productData.appendChild(pDataTitle);


        //add productData to Product_wrapper div
        productWrapper.appendChild(productData);





        product.appendChild(productWrapper);

        var addBtn = document.createElement('button');
        addBtn.className = 'btn btn-info addToCart';
        addBtn.innerText = 'Add to Cart';
        addBtn.setAttribute('data-id', productDataObject.id);
        product.appendChild(addBtn);


        var link = document.createElement('a')




        return product;
    }





    // ul tag 
    var productsUl = document.querySelector('.products');
    var productsPage = document.querySelector('.products-page');
    var cartLink = document.querySelector('.cart-link');

    var genre = document.querySelector('#genre');

    var productList = document.querySelectorAll('.product'); // li product on app.php


    var uiContainer = [productsUl, productsPage, cartLink, genre, productList];
    return {
        uiList: uiContainer,
        createProduct: createProduct,

    }

})()



class Cart {

    constructor() {
        this.cart = [];

    }






}




var app = (function (ui) {

    // save product to local storage;
    dataStorage()
    var ulLists = ui.uiList;
    //display each product from products

    displayAllProductsToUI(ulLists, ui);

    console.log(ulLists[3])

    console.log(window)
    ulLists[3].addEventListener('change', function () {


        console.log(ulLists[4]);
        var productList = document.querySelectorAll('.product'); // li product on app.php
        console.log(productList);

    })



    // console.log(ulLists[2])
    var addToCartBtns = document.querySelectorAll('.addToCart'); // select all buttons

    var cart;
    var carStorage = window.localStorage;



    if (carStorage.getItem('cart')) {
        cart = JSON.parse(carStorage.getItem('cart'))
    } else {
        cart = []
    }


    var cartDisplayDiv = document.querySelector('.modal-body-ul');


    // add click event to cart link
    ulLists[2].addEventListener('click', function () {

        viewCartItems();

    })


    // window.localStorage.setItem('cart', JSON.stringify(cart));

    var cartUpdate = document.querySelector('.cart');


    addToCartBtns.forEach(function (button) {
        // add event Listener to each add to Cart Button

        button.addEventListener('click', function (e) {
            e.target.innerHTML = "Added";
            e.target.setAttribute('disabled', false)

            var productID = (e.target.getAttribute('data-id')); // product id from  button attribute
            var product = (findAproductById(products, productID));
            console.log(product);

            // add new product  cart
            cart.push(product);

            cartUpdate.innerHTML = cart.length;

            carStorage.setItem('cart', JSON.stringify(cart))
            //console.log(JSON.parse(JSON.stringify(cart)));








        })
        cartUpdate.innerHTML = cart.length;


    })

    // product by id 
    function findAproductById(array, id) {
        const result = array.filter(function (product) {
            if (product.id === id) {
                return (product);
            }
        })

        return result;


    }

    // view cart items
    function viewCartItems() {
        var items = (JSON.parse(window.localStorage.getItem('cart')));
        if (items.length === 0) {

            alert("your cart is empty");
        }
        else {
            items.forEach(function (value) {

                var productItem = document.createElement('li'); // crate list item
                productItem.innerHTML = value[0].name + " " + "$" + value[0].price;


                cartDisplayDiv.appendChild(productItem); //add to unordered list



            })
        }





    }

})(UI)


// display all products to the screen
function displayAllProductsToUI(ulLists, ui) {
    if (ulLists[0] !== null || uiList[0] !== undefined) {
        products.forEach(function (item, index) {
            //add list the ul element           
            ulLists[0].appendChild(ui.createProduct(item));
        });
    }
}

