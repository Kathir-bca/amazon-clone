import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {checkoutUpdate} from './checkout/checkoutHeader.js';

checkoutUpdate();
renderOrderSummary();
renderPaymentSummary();
