import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { checkoutUpdate } from './checkout/checkoutHeader.js';
// import '../data/cart-class.js'
// import '../data/backend-practice.js'
import { loadProducts, loadProductsFetch } from '../data/products.js';

async function loadPage() {
    try {

        await loadProductsFetch();

    } catch (error) {

        alert('Unexpected Error, Please Try Again Later')
    
    }

    checkoutUpdate();
    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

// loadProductsFetch()
//     .then(() => {
//         checkoutUpdate();
//         renderOrderSummary();
//         renderPaymentSummary();
//     });


