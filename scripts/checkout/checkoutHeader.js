import { cart, totalCartQuantityUpdate } from "../../data/cart.js";


export function checkoutUpdate() {
    let totalCartQuantity = totalCartQuantityUpdate();
    let checkoutHTML = `Checkout (<a class="return-to-home-link" href="amazon.html">${totalCartQuantity} items</a>)`
    document.querySelector('.js-checkout-header-middle-section').innerHTML = checkoutHTML;    
}




