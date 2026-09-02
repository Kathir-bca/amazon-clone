import { cart, addToCart, loadFromStorage } from '../../data/cart.js';

describe('test suite: addToCart', () => {
    it('adds an existing product to the cart', () => {

        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productId: "4e72c9a5-83f1-46bd-a027-59c314e68f20",
                    quantity: 2,
                    deliveryOptionId: '1'
                }
            ]);
        })
        loadFromStorage()

        addToCart('4e72c9a5-83f1-46bd-a027-59c314e68f20', 2);
        expect(cart.length).toEqual(1);
        expect(cart[0].quantity).toEqual(4);
    });

    it('adds an new product to the cart', () => {

        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        })
        loadFromStorage()

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 2);
        expect(cart.length).toEqual(1);
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 4);
        expect(cart.length).toEqual(1);
        addToCart('4e72c9a5-83f1-46bd-a027-59c314e68f20', 2);
        expect(cart.length).toEqual(2);
        expect(localStorage.setItem).toHaveBeenCalledTimes(3);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    });

    it('add the product that did not exist', () => {

        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productId: "4e72c9a5-83f1-46bd-a027-59c314e68f20",
                    quantity: 2,
                    deliveryOptionId: '1'
                }
            ]);
        })
        loadFromStorage()

        addToCart('e43638ce--b27f-e1d07eb678c6', 2);
        expect(cart.length).toEqual(2);
    });
});