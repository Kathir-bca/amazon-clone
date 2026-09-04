import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";
import { loadProducts, loadProductsFetch } from "../../data/products.js";

describe('test suite: renderOrderSummary', () => {
    
    beforeAll(async () => {
        await loadProductsFetch();
    });
    beforeEach(() => {

        spyOn(localStorage, 'setItem');

        document.querySelector('.js-testOrder-container')
            .innerHTML = `
                <div class = "js-checkout-header-middle-section"></div>
                <div class = "js-order-summary"></div>
                <div class = "js-payment-summary"></div>
                `;

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productId: "4e72c9a5-83f1-46bd-a027-59c314e68f20",
                    quantity: 2,
                    deliveryOptionId: '1'
                }, {
                    productId: "d84b1e63-97f5-42ca-a806-31e59c724bf8",
                    quantity: 1,
                    deliveryOptionId: '2'
                }
            ]);
        });

        loadFromStorage();
        renderOrderSummary();
    });


    it('dispaly the cart', () => {

        expect(document.querySelectorAll('.js-test-cart-item-container').length).toEqual(2);
        expect(document.querySelector('.js-test-product-quantity-4e72c9a5-83f1-46bd-a027-59c314e68f20').innerText).toContain('Quantity: 2')
        expect(document.querySelector('.js-test-product-quantity-d84b1e63-97f5-42ca-a806-31e59c724bf8').innerText).toContain('Quantity: 1')

    })

    it('remove from cart', () => {

        document.querySelector('.js-test-delete-link-d84b1e63-97f5-42ca-a806-31e59c724bf8').click();
        expect(document.querySelectorAll('.js-test-cart-item-container').length).toEqual(1);
        expect(document.querySelector('.js-cart-item-container-d84b1e63-97f5-42ca-a806-31e59c724bf8')).toEqual(null);
        expect(document.querySelector('.js-cart-item-container-4e72c9a5-83f1-46bd-a027-59c314e68f20')).not.toEqual(null);
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('4e72c9a5-83f1-46bd-a027-59c314e68f20');

    });

    afterEach(() => {
        document.querySelector('.js-testOrder-container')
            .innerHTML = '';
    })
});

