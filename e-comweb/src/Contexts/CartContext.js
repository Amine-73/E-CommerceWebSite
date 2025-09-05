import { createContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import FeedbackIcon from '@mui/icons-material/Feedback';



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  // This is the main state that will hold all your cart items
  const [cartItems, setCartItems] = useState([]);
  const [Quantity, setQuantity] = useState();
  const [totalQuantity, setTotalQuantity] = useState();

  // Function to add a product to the cart
//   useEffect(()=>{
//     addToCart()
//   },[cartItems])

  const addToCart = (product) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If it exists, update the quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + 1,
                itemTotalPrice: (existingItem.quantity + 1) * item.lowPrice,
              }
            : item
        )
      );
      setQuantity(existingItem.quantity + 1);
    } else {
      // If it's a new item, add it to the cart with a quantity of 1
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, itemTotalPrice: product.lowPrice },
      ]);
      setQuantity(1);
    }
    const Calc = cartItems.reduce((sum, item) => sum + item.quantity, 0) + 1;
    setTotalQuantity(Calc);
  };

  // You can add more functions here, like removeFromCart, clearCart, etc.

  // Calculate total price and total quantity

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.lowPrice),
    0
  );

// ================================================


// ================================================





  return (
    <CartContext.Provider
      value={{
        setQuantity,
        Quantity,
        cartItems,
        addToCart,
        totalQuantity,
        totalPrice,
        setTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
