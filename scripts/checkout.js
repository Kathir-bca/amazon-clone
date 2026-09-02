import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {checkoutUpdate} from './checkout/checkoutHeader.js';
import '../data/cart-oop.js'

checkoutUpdate();
renderOrderSummary();
renderPaymentSummary();
