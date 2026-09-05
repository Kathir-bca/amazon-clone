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
                    productId: "bc2847e9-5323-403f-b7cf-57fde044a955",
                    quantity: 2,
                    deliveryOptionId: '1'
                }, {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
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
        expect(document.querySelector('.js-test-product-quantity-bc2847e9-5323-403f-b7cf-57fde044a955').innerText).toContain('Quantity: 2')
        expect(document.querySelector('.js-test-product-quantity-15b6fc6f-327a-4ec4-896f-486349e85a3d').innerText).toContain('Quantity: 1')

    })

    it('remove from cart', () => {

        document.querySelector('.js-test-delete-link-15b6fc6f-327a-4ec4-896f-486349e85a3d').click();
        expect(document.querySelectorAll('.js-test-cart-item-container').length).toEqual(1);
        expect(document.querySelector('.js-cart-item-container-15b6fc6f-327a-4ec4-896f-486349e85a3d')).toEqual(null);
        expect(document.querySelector('.js-cart-item-container-bc2847e9-5323-403f-b7cf-57fde044a955')).not.toEqual(null);
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('bc2847e9-5323-403f-b7cf-57fde044a955');

    });

    afterEach(() => {
        document.querySelector('.js-testOrder-container')
            .innerHTML = '';
    })
});

