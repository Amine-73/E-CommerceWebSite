import { useContext, useState } from 'react';
import { CartContext } from './Contexts/CartContext'; // Import the CartContext
import Header from './header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

const Cart = () => {
    const { cartItems, totalQuantity, totalPrice,setQuantity ,Quantity,setTotalQuantity} = useContext(CartContext);
    const [cartItem,setCartItem]=useState(cartItems)

    function handlDeletItem(Id){
        cartItem.map((event)=>{
            if(event.id=== Id){
                const AllItem=cartItem.filter((event)=>{
                    return event.id!==Id;
                })
                setCartItem(AllItem)
                setTotalQuantity(totalQuantity-event.quantity)
            }
            return 0; 
        })
        
        
    }

    return (
        <>
        <Header/>
        <Container maxWidth="xl">
        <div style={{paddingTop:"80px"}}>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Product</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Title</TableCell>
            <TableCell align="right" sx={{fontWeight:"bold"}}>Price&nbsp;($)</TableCell>
            <TableCell align="right" sx={{fontWeight:"bold"}}>Quantity</TableCell>
            <TableCell align="right" sx={{fontWeight:"bold"}}>Total&nbsp;($)</TableCell>
            <TableCell align="right" sx={{fontWeight:"bold"}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItem.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                MM
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell align="right">${row.lowPrice}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">${row.itemTotalPrice}</TableCell>
              <TableCell align="right"><IconButton onClick={()=>handlDeletItem(row.id)} aria-label="delete"  color="primary"><ClearIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





            {/* <h2>Your Cart ({totalQuantity} items)</h2>
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
            )} */}
        </div></Container>
        </>
        
    );
};

export default Cart;