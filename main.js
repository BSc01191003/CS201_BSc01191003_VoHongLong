document.addEventListener("DOMContentLoaded", function() {
    getProducts();
    function getProducts() {
      let url = "https://fakestoreapi.herokuapp.com/products";
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        url,
        true
      );
      xhr.onload = function() {
        if(this.status == 200) {
          let result = JSON.parse(this.responseText);
          outputProducts(result);
        }
  
      }
      xhr.send();
    }
  
    function outputProducts(Products) {
      let Productsdiv = document.querySelector(".Products");
      console.log(Products);
      let output = "";
        for (let i = 0; i < 5; i++) {
            output+= `<div class="col">
              <div class="card h-100">
                  <img class="card-img-top" src="${Products[i].image}"> 
                  <h3 class="card-title mt-3">$${Products[i].price}</h3>                
                  <p class="card-text mt-3">${Products[i].title}</p>
                  </div>
              </div>
            </div>
          </div>`;
            
        }
        Productsdiv.innerHTML = output;
    }
})