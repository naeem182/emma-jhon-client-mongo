import { getShoppingCart } from "../utilities/fakedb";

const cartproductLoader = async () => {
    const loadedproduct = await fetch('http://localhost:5000/product');
    const product = await loadedproduct.json();

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();

    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = product.find(pd => pd._id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to send two things
    // return [product, savedCart]
    // another options
    // return { product, cart: savedCart }

    return savedCart;
}

export default cartproductLoader;