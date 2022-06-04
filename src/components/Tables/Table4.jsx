import * as React from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// const TAX_RATE = 0.07;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTotalCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.yellow,
    color: theme.palette.common.blue,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(date, plant, stp, order, balance) {
  // const price = priceRow(qty, unit);
  return { date, plant, stp, order, balance };
}

function orderSum(items) {
  return items.map(({ order }) => order).reduce((sum, i) => sum + i, 0);
}
function balanceSum(items) {
  return items.map(({ balance }) => balance).reduce((sum, i) => sum + i, 0);
}
const rows = [
  createRow("10/02/2022", "REF", "Transcom", 15, 10),
  createRow("10/02/2022", "REF", "Transcom", 15, 10),
  createRow("10/02/2022", "REF", "Transcom", 15, 10),
  createRow("10/02/2022", "REF", "Transcom", 15, 10),
  // createRow("Paper (Case)", 10, 45.99),
  // createRow("Waste Basket", 2, 17.99),
  // createRow("Paperclips (Box)", 100, 1.15),
  // createRow("Paper (Case)", 10, 45.99),
  // createRow("Waste Basket", 2, 17.99),
];

const orderTotal = orderSum(rows);
const balanceTotal = balanceSum(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center">D.Date</TableCell>
            <TableCell align="center">Plant</TableCell>
            <TableCell align="center">STP Name</TableCell>
            <TableCell align="center">Order Qty</TableCell>
            <TableCell align="center">Balance Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.plant}</TableCell>
              <TableCell align="center">{row.stp}</TableCell>
              <TableCell align="center">{row.order}</TableCell>
              <TableCell align="center">{row.balance}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={4} />
            <TableCell rowSpan={4} />
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>
              <b>Total Order Qty</b>
            </TableCell>

            <TableCell align="right">{orderTotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>
              <b>Total Balance Qty</b>
            </TableCell>
            <TableCell align="right">{balanceTotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
