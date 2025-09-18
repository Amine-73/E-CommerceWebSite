import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext"; // Import the CartContext
import Header from "../Header/header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Footer from "../Footer/Footer";

const Cart = () => {
  const {
    cartItems,
    totalQuantity,
    totalPrice,
    setQuantity,
    Quantity,
    setTotalQuantity,
  } = useContext(CartContext);
  const [cartItem, setCartItem] = useState(cartItems);
  const [total, setTotal] = useState(totalPrice);

  function handlDeletItem(Id) {
    cartItem.map((event) => {
      if (event.id === Id) {
        const AllItem = cartItem.filter((event) => {
          return event.id !== Id;
        });
        setCartItem(AllItem);
        setTotalQuantity(totalQuantity - event.quantity);
        setTotal(
          AllItem.reduce(
            (sum, item) => sum + item.quantity * parseFloat(item.lowPrice),
            0
          )
        );
      }
      return 0;
    });
  }

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <div style={{ paddingTop: "80px", minHeight: "39vh" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700, background: "#7FFFD4" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                    Product
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "20px" }}>
                    Title
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Price&nbsp;($)
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Total&nbsp;($)
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItem.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "20px" }}
                    >
                      {row.category}
                    </TableCell>
                    <TableCell sx={{ fontSize: "20px" }}>{row.name}</TableCell>
                    <TableCell align="right" sx={{ fontSize: "20px" }}>
                      ${row.lowPrice}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      {row.quantity}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      ${row.itemTotalPrice.toFixed(2)}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      <IconButton
                        onClick={() => handlDeletItem(row.id)}
                        aria-label="delete"
                        color="primary"
                      >
                        <ClearIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{ flexGrow: 1, backgroundColor: "#7FFFD4", padding: "30px" }}
          >
            <Grid container spacing={3}>
              <Grid size="grow" sx={{ textAlign: "left", paddingLeft: "20px" }}>
                <div
                  colSpan={3}
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Total
                </div>
              </Grid>
              <Grid size={3}>
                <div
                  align="center"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  ${total.toFixed(2)}
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
