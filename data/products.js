import { formatCurrency } from "../scripts/utils/money.js";

export function getProducts(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id == productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}


class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }
  getStarUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`
  }
  getPrice() {
    return ` $${formatCurrency(this.priceCents)}`;
  }
  getFeatureInfo() {
    return '';
  }
  getWarranty() {
    return ``;
  }
}

class Clothing extends Product {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails)
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  getFeatureInfo() {
    return `<a href="${this.sizeChartLink}">Size Chart</a>
            <select class= "size-fashion">
                <option selected value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
                <option value="4">XL</option>
                <option value="5">XXL</option>
            </select>`
  }
  getWarranty() {
    return '';
  }
}

class Appliance extends Product {
  applianceInstruction;
  applianceWarranty;
  constructor(productDetails) {
    super(productDetails)
    this.applianceInstruction = "images/appliance-instructions.png";
    this.applianceWarranty = "images/appliance-warranty.png";
  }

  getFeatureInfo() {
    return `<a href=${this.applianceInstruction}>Instructions</a>`
  }
  getWarranty() {
    return `<a href=${this.applianceWarranty}>Warranty</a>`
  }
}

class Shoes extends Product {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails)
    this.sizeChartLink = '';
  }

  getFeatureInfo() {
    return `<p>Size: </p>
            <select class= "size-fashion">
                <option selected value="1">5</option>
                <option value="2">6</option>
                <option value="3">7</option>
                <option value="4">8</option>
                <option value="5">9</option>
                <option value="6">10</option>
                <option value="7">11</option>
                <option value="8">12</option>
                <option value="9">13</option>
                <option value="10">14</option>
            </select>`
  }

  getWarranty() {
    return '';
  }
}

export let products = [];


export function loadProductsFetch() {
  const promise = fetch(
    'http://127.0.0.1:5501/backend/products.json'
  ).then((response) => {

    return response.json();

  }).then((productDetails) => {

    products = productDetails.map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      if (productDetails.keywords.includes("appliances")) {
        return new Appliance(productDetails);
      }
      if (productDetails.keywords.includes("shoes")) {
        return new Shoes(productDetails);
      }
      return new Product(productDetails);
    });
    
  })
  return promise;
}
/*
loadProductsFetch().then(()=>{
  console.log('next step');
})
*/



export function loadProducts(callback) {
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      if (productDetails.keywords.includes("appliances")) {
        return new Appliance(productDetails);
      }
      if (productDetails.keywords.includes("shoes")) {
        return new Shoes(productDetails);
      }
      return new Product(productDetails);
    });

    callback();
  })
  xhr.open('GET', 'http://127.0.0.1:5501/backend/products.json');
  xhr.send();

}
