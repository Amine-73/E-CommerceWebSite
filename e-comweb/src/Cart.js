import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from './header';
import Container from '@mui/material/Container';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const rows = [
  {
    name:"salma df",price:15,quantiter:9,size:3,heightprice:34,
    color:4.0
  },

];

export default function Cart() {
  return (
    <section>
        <Header/>
        <Container  maxWidth="xl">
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 ,marginTop:"20%"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell >Title</StyledTableCell>
            <StyledTableCell align="right">Price &nbsp;($)</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                3333
              </StyledTableCell>
              <StyledTableCell >{row.name}</StyledTableCell>
              <StyledTableCell align="right">666666</StyledTableCell>
              <StyledTableCell align="right">77777777</StyledTableCell>
              <StyledTableCell align="right">9999999999</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </section>
  );
}
