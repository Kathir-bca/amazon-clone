export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    }, {
        productId: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        quantity: 1
    }
];


export function addToCart(productId) {

    let matchinngItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchinngItem = cartItem;
        }
    });

    if (matchinngItem) {
        matchinngItem.quantity++;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        })
    }
    console.log(cart);
}
