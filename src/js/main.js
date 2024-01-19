const lists_wrapper = document.querySelector(".list_wrapper")
const card_wrapper = document.querySelector(".card-wrapper")
const body = document.querySelector("#body")
const input_res = document.querySelector(".input_res")
const box = document.querySelector(".box")

fetch("https://fakestoreapi.com/products?limit=3")
    .then(res => res.json())
    .then(data => BannerBottom(data))
function BannerBottom(data) {
    card_wrapper.innerHTML = data.map((e) => (
        `<a href="./cart.html?productId=${e.id}">
        <div id="card" class="relative h-[360px] w-[420px] hover:bg-[#F2F2F2] p-[30px] rounded-[10px]">
                <div class="flex items-start justify-between">
                    <h3 class="font-Poppins-bold text-[20px] w-[200px] mb-2">${e.title.split("").length > 28 ? e.title.slice(0, 28) + "..." : e.title}</h3>
                    <h1 class="font-Poppins-bold text-[30px] text-[#40BFFF]">$${e.price}</h1>
                </div>
                <img class="h-[190px] object-cover object-center bg-green-400 rounded-xl block mx-auto" src="${e.image}" alt="photo" />
                <div class="sale flex items-center justify-center gap-4 pt-7 mx-auto w-[100%]">
                    <strike class="text-[#9098B1] font-lg font-Poppins-regular">$${e.price}</strike>
                    <p class="text-[#FB7181] font-Poppins-bold text-lg">24% Off</p>
                </div>
        </div>
        </a>
        `
    )).join("")
}
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => lists_wrapper_Rendering(json))

function lists_wrapper_Rendering(data) {
    lists_wrapper.innerHTML = data.map((e) => (
        `
            <li data-cat_id="${e}" class="uppercase border-b border-[1px solid] hover:border-b-2 hover:border-blue-500 hover:text-blue-500 h-[23px]">${e}</li>   
        `
    )).join("")
}

body.addEventListener("click", (e) => {
    const id = e.target.dataset.cat_id;
    if (id == "men's clothing") {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res => res.json())
            .then(data => RenderAll(data))
    }
    if (id == "women's clothing") {
        fetch("https://fakestoreapi.com/products/category/women's%20clothing")
            .then(res => res.json())
            .then(data => RenderAll(data))
    }
    if (id == "jewelery") {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res => res.json())
            .then(data => RenderAll(data))
    }
    if (id == "electronics") {
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then(res => res.json())
            .then(data => RenderAll(data))
    }

})


function RenderAll(data) {
    box.innerHTML = data.slice(0, 4).map((e) => (
        `
        <div class="card w-[300px] bg-white rounded-[5px] py-4 shadow-xl"">
            <img class="card_img object-contain object-center w-[200px] h-[272px] block mx-auto" src="${e.image}" alt="" />
              <h3 class="card_title pt-[10px] text-center font-Poppins-bold text-xl">
                <a href="./cart.html?productId=${e.id}">${e.title.split("").length > 20 ? e.title.slice(0, 20) + "..." : e.title}</a>
              </h3>
              <img class="card_rating block mx-auto pt-[10px]" src="./assets/images/stars.svg" alt="" />
            <div class="flex gap-10 items-center justify-center pt-2">
                <p class="font-Poppins-bold text-xl text-[#40BFFF]">
                 $ ${e.price}
                </p>
                <strike class="text-base text-[#9098B1] font-Poppins-regular">$534,33</strike>
                <p class="text-base text-[#FB7181] font-Poppins-bold">24%</p>
            </div>
            <button data-id="${e.id}" class="px-9 py-2 text-white font-Poppins-medium text-xl bg-green-500 rounded-md mx-auto block mt-3 hover:bg-green-800">Buy now</button>
        </div>
        `
    )).join("")
}



const input = document.querySelector("#input");
const form = document.querySelector("#form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`https://fakestoreapi.com/products/${input.value}`)
        .then(res => res.json())
        .then(data => RenderIDInput(data))

    if (input.value > 20) {
        input_res.innerHTML = "<h1>404 Not Found</h1>"
    }
})


function RenderIDInput(data) {
    input_res.innerHTML = `
      <div class="card w-[300px] bg-white rounded-[5px] py-4 shadow-xl"">
            <img class="card_img object-contain object-center w-[200px] h-[272px] block mx-auto" src="${data.image}" alt="" />
              <h3 class="card_title pt-[10px] text-center font-Poppins-bold text-xl">
                <a href="./cart.html?productId=${data.id}">${data.title.split("").length > 20 ? data.title.slice(0, 20) + "..." : e.title}</a>
              </h3>
              <img class="card_rating block mx-auto pt-[10px]" src="./assets/images/stars.svg" alt="" />
            <div class="flex gap-10 items-center justify-center pt-2">
                <p class="font-Poppins-bold text-xl text-[#40BFFF]">
                 $ ${data.price}
                </p>
                <strike class="text-base text-[#9098B1] font-Poppins-regular">$534,33</strike>
                <p class="text-base text-[#FB7181] font-Poppins-bold">24%</p>
            </div>
        </div>
    `
}



const wrapper_korzinka = document.querySelector("#korzinka_uchun_wrapper");
const count_red = document.getElementById("count-red");
const count = document.getElementById("count");


let arr = [];

body.addEventListener("click", (e) => {
    let btn_id = +e.target.dataset.id;
    if (btn_id) {
        count_red.style.display = "block";
        count.style.display = "block";
        if (!arr.includes(btn_id)) {
            arr.push(btn_id);
            count.textContent = arr.length;
        }
        for (let i = 0; i < arr.length; i++) {
            fetch(`https://fakestoreapi.com/products/${arr[i]}`)
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
})


