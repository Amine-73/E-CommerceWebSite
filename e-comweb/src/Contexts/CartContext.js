// import { createContext, useState } from "react";
// import { useParams } from "react-router-dom";

// export const CartContext = createContext();

// //create the provider component
// export const CartProvider = ({ Children }) => {
//   const productId = useParams();
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     const existingProduct = product.find((e) => e.id === productId);

//     // check if the item aready existe
//     if (existingProduct) {
//       setCartItems({
//         ...existingProduct,
//         quantity: existingProduct.quantity + 1,
//       });
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.quantity * parseFloat(item.price),
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ addToCart, totalQuantity, totalPrice, cartItems }}
//     >
//       {Children}
//     </CartContext.Provider>
//   );
// };


import  { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
    // This is the main state that will hold all your cart items
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        // Check if the item already exists in the cart
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // If it exists, update the quantity
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? { ...existingItem, quantity: existingItem.quantity + 1 }
                        : item
                )
            );
        } else {
            // If it's a new item, add it to the cart with a quantity of 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    
    // You can add more functions here, like removeFromCart, clearCart, etc.

    // Calculate total price and total quantity
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.quantity * parseFloat(item.lowPrice)), 0);


    return (
        <CartContext.Provider value={{ cartItems, addToCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
