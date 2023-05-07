let products = [
  {
    id: 2536,
    name: "Sony Professional 32GB XQD",
    price: 500,
    category: "Storage",
    description: "The new XQD cards achieve Max read",
    image: "../images/sony.jpg",
  },
  {
    id: 2537,
    name: "Lenovo Legion 15.6 Gaming",
    price: 4228,
    category: "Laptops",
    description:
      "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
    image: "../images/lenovo.jpg",
  },
  {
    id: 2538,
    name: "ASUS ROG GL552VW-DH71",
    price: 5300,
    category: "Laptops",
    description:
      "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
    image: "../images/asus.jpg",
  },
];

//      function showProducts(){
//          for(products of products)
//          document.getElementById("products").innerHTML += `<div class="card" style="width: 18rem;
//    <img src=${products.image} class="card-img-top" alt="...">
//    <div class="card-body">
//      <h5 class="card-title">${products.name}</h5>
//      <p class="card-text">${products.category}</p>
//      <a href="#" class="btn btn-primary">See More</a>
//    </div>
//  </div>`
//      }
//      showProducts()
function showCards() {
  for (let i = 0; i < products.length; i++) {
    document.getElementById("products").innerHTML += `
        <div class="col-md-4">
        <div class="card text-center" style="width: 18rem;">
  <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
  <div class="card-body">
    <h5 style="font-size: 1.2rem;" class="card-title ">${products[i].name}</h5>
    <p class="card-text">${products[i].category}</p>
    <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="setModal(${i})">See More</a>
  </div>
</div>
    </div>`;
  };
};

showCards();

function setModal(index){
    document.getElementById("title").innerText = products[index].name;
    document.getElementById('mBody').innerHTML = `<p><b>Serial Number:</b> ${products[index].id}
    </p><br><p><b>Category:</b> ${products[index].category}
    <p/><br><p><b>Description:</b> ${products[index].description}
    <p/><br><h4 class="text-end">Price:${products[index].price}<h4/>`
}
