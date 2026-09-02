export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [
        {
            productId: "4e72c9a5-83f1-46bd-a027-59c314e68f20",
            quantity: 2,
            deliveryOptionId: '1'
        }, {
            productId: "d84b1e63-97f5-42ca-a806-31e59c724bf8",
            quantity: 1,
            deliveryOptionId: '2'
        }
    ];
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId, quantity) {

    let matchingItem;

    cart.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
                productId: productId,
                quantity: quantity,
                deliveryOptionId: '1'
            });
    }
    saveToStorage();
}

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

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}

export function totalCartQuantityUpadte(){
    let totalCartQuantity = 0;
    cart.forEach((cartItem) => {
        totalCartQuantity += cartItem.quantity;
    })
    return totalCartQuantity;
    
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