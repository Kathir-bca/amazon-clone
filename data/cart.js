export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [
        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
        }, {
            productId: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
            quantity: 1
        }
    ];
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

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
    saveToStorage();
}
// localStorage.clear('cart')
export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
           newCart.push(cartItem);
        }
    })
    cart = newCart;
    saveToStorage();
}

// export function removeFromCart(productId) {
//     cart = cart.filter(item => item.productId !== productId);
//     saveToStorage();
// }

// export function addToCart(productId) {
//     const match = cart.find(item => item.productId === productId);
//     if (match) {
//         match.quantity++;
//     } else {
//         cart.push({ productId, quantity: 1 });
//     }
//     saveToStorage();
// }