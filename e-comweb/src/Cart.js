import { useContext } from 'react';
import { CartContext } from './Contexts/CartContext'; // Import the CartContext
import Header from './header';
const Cart = () => {
    const { cartItems, totalQuantity, totalPrice } = useContext(CartContext);

    return (
        <>
        <Header/>
        <div style={{paddingTop:"30px"}}>
            <h2>Your Cart ({totalQuantity} items)</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - Quantity: {item.quantity} - $ {item.lowPrice} each
                            </li>
                        ))}
                    </ul>
                    <h3>Total: $ {totalPrice}</h3>
                </div>
            )}
        </div>
        </>
        
    );
};

export default Cart;