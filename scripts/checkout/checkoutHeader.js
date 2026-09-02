import { cart, totalCartQuantityUpadte } from "../../data/cart.js";


export function checkoutUpdate() {
    let totalCartQuantity = totalCartQuantityUpadte();
    let checkoutHTML = `Checkout (<a class="return-to-home-link" href="amazon.html">${totalCartQuantity} items</a>)`
    document.querySelector('.js-checkout-header-middle-section').innerHTML = checkoutHTML;    
}















