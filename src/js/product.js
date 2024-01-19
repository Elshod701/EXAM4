const product_id = Number(new URLSearchParams(window.location.search).get("productId"));
const about_Page = document.getElementById("about_Page");
const singleImage = document.querySelector("#single-product-image")
const singleTitle = document.querySelector("#single-product-title")
const singlePrice = document.querySelector("#single-product-price")
const singleDescription = document.querySelector("#single-product-description")
const singleCatName = document.querySelector("#single-product-category-name")
const card_id = document.querySelector("#card_id")
// fetch(`https://fakestoreapi.com/products/${product_id}`)
    // .then(res => res.json())
    // .then(data => Render_Single_Product(data))

function Render_Single_Product(singleProductData) {
    singleImage.src = singleProductData.image;
    singleTitle.innerHTML = singleProductData.title
    card_id.innerHTML = singleProductData.id
    singlePrice.innerHTML = singleProductData.price
    singleDescription.innerHTML = singleProductData.description
    singleCatName.innerHTML = singleProductData.category
}




