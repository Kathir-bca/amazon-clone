import { cart, totalCartQuantityUpdate } from "./cart.js";
import { orders } from "./orders.js";
import {  getProducts, loadProducts } from './products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

document.getElementById('js-cart-quantity').innerHTML = totalCartQuantityUpdate();

loadProducts(
    function renderTracking() {
        const url = new URL(window.location.href);
        const trackingOrderId = url.searchParams.get('orderId');
        const trackingProductId = url.searchParams.get('productId');
        const trackingProduct = getProducts(trackingProductId);

        let trackingOrder;
        getOrder()
        function getOrder() {
            orders.forEach((order) => {
                if (order.id === trackingOrderId) {
                    trackingOrder = order;
                }
            })
        }

        let arrivingDate = dayjs(trackingOrder.estimatedDeliveryTime).format('dddd, MMMM D');

        let trackingOrderQuantity;
        cart.forEach((cartItem) => {
            if(cartItem.productId === trackingProductId){
                trackingOrderQuantity = cartItem.quantity;
            }
        })


        let container = document.querySelector('.js-order-tracking');

        let trackingHTML =
            `
                <a class="back-to-orders-link link-primary" href="orders.html">
                View all orders
                </a>

                <div class="delivery-date">
                ${arrivingDate}
                </div>

                <div class="product-info">
                ${trackingProduct.name}
                </div>

                <div class="product-info">
                Quantity: ${trackingOrderQuantity}
                </div>

                <img class="product-image" src="${trackingProduct.image}">

                <div class="progress-labels-container">
                <div class="progress-label">
                    Preparing
                </div>
                <div class="progress-label current-status">
                    Shipped
                </div>
                <div class="progress-label">
                    Delivered
                </div>
                </div>

                <div class="progress-bar-container">
                <div class="progress-bar"></div>
                </div>
            `

            container.innerHTML = trackingHTML;
    })