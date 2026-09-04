
import { cart, totalCartQuantityUpadte } from "./cart.js";
import { products, getProducts, loadProducts } from './products.js';
import { renderPaymentSummary } from "../scripts/checkout/paymentSummary.js";
import { getDeliveryOption } from "./deliveryOptions.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formatCurrency } from "../scripts/utils/money.js";


export const orders = JSON.parse(localStorage.getItem('orders'))
    || [];


export function addOrder(order) {
    orders.unshift(order)
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}


let orderGrid = document.querySelector('.js-order-grid');



export function renderOrders() {
    let ordersHTML = '';
    let orderContainerHTML = '';
    loadProducts(() => {
        orders.forEach((order) => {

            const quantityEl = document.querySelector('.cart-quantity');
            if (quantityEl) quantityEl.innerHTML = totalCartQuantityUpadte();

            const container = document.querySelector('.js-order-container');
            if (!container) return; // not on the orders page, stop here
            console.log(order);
            let orderDate = dayjs(order.estimatedDeliveryTime).format('MMMM D');

            order.products.forEach((orderProduct) => {

                let matchingProduct = getProducts(orderProduct.productId)
                let arrivingDate = dayjs(orderProduct.estimatedDeliveryTime).format('MMMM D');

                orderContainerHTML += `
                    <div class="product-image-container">
                        <img src="${matchingProduct.image}">
                    </div>

                    <div class="product-details">
                        <div class="product-name">
                            ${matchingProduct.name}
                        </div>
                        <div class="product-delivery-date">
                            Arriving on: ${arrivingDate}
                        </div>
                        <div class="product-quantity">
                            Quantity: ${orderProduct.quantity}
                        </div>
                        <button class="buy-again-button button-primary">
                            <img class="buy-again-icon" src="images/icons/buy-again.png">
                                <span class="buy-again-message">Buy it again</span>
                        </button>
                    </div>

                    <div class="product-actions">
                        <a href="tracking.html">
                            <button class="track-package-button button-secondary">
                                Track package
                            </button>
                        </a>
                    </div>`;

                document.querySelector('.js-order-details').innerHTML += orderContainerHTML;
            })

            ordersHTML += `
                <div class="order-container">
                    <div class="order-header">
                        <div class="order-header-left-section">
                            <div class="order-date">
                                <div class="order-header-label">Order Placed:</div>
                                <div>${orderDate}</div>
                            </div>
                            <div class="order-total">
                                <div class="order-header-label">Total:</div>
                                <div>$${formatCurrency(order.totalCostCents)}</div>
                            </div>
                        </div>
                        <div class="order-header-right-section">
                            <div class="order-header-label">Order ID:</div>
                            <div>${order.id}</div>
                        </div>
                    </div>
                    <div class="order-details-grid">
                        ${orderContainerHTML}
                    </div>
                </div>
            `;
            container.innerHTML = ordersHTML;

            saveToStorage()
        });
    });
}
renderOrders()