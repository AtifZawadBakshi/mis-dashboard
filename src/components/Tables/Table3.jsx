import * as React from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(party_name, ref, tv, mwo, rac, wm) {
  //   const price = priceRow(qty, unit);
  return { party_name, ref, tv, mwo, rac, wm };
}

function refSum(items) {
  return items.map(({ ref }) => ref).reduce((sum, i) => sum + i, 0);
}

function tvSum(items) {
  return items.map(({ tv }) => tv).reduce((sum, i) => sum + i, 0);
}

function mwoSum(items) {
  return items.map(({ mwo }) => mwo).reduce((sum, i) => sum + i, 0);
}

function wmSum(items) {
  return items.map(({ wm }) => wm).reduce((sum, i) => sum + i, 0);
}
function racSum(items) {
  return items.map(({ rac }) => rac).reduce((sum, i) => sum + i, 0);
}

// const rows = [
//   createRow("Electra", 2, "", "", "", ""),
//   createRow("Transcom", 15, "", "", 2, ""),
//   createRow("Butterfly", 2, 2, "", 2, ""),
//   createRow("Rangs", 1, "", "", "", ""),
//   createRow("BSO/Partner", 14, "", "", 4, ""),
// ];
const rows = [
  createRow("Electra", 2, 0, 0, 0, 0),
  createRow("Transcom", 15, 0, 0, 2, 0),
  createRow("Butterfly", 2, 2, 0, 2, 0),
  createRow("Rangs", 1, 0, 0, 0, 0),
  createRow("BSO/Partner", 14, 0, 0, 4, 0),
];
const REFTotal = refSum(rows);
const TVTotal = tvSum(rows);
const MWOTotal = mwoSum(rows);
const RACTotal = racSum(rows);
const WMTotal = wmSum(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sold to Party Name</StyledTableCell>
            <StyledTableCell align="center">REF</StyledTableCell>
            <StyledTableCell align="center">TV</StyledTableCell>
            <StyledTableCell align="center">MWO</StyledTableCell>
            <StyledTableCell align="center">RAC</StyledTableCell>
            <StyledTableCell align="center">WM</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.party_name}</TableCell>
              <TableCell align="center">{row.ref}</TableCell>
              <TableCell align="center">{row.tv}</TableCell>
              <TableCell align="center">{row.mwo}</TableCell>
              <TableCell align="center">{row.rac}</TableCell>
              <TableCell align="center">{row.wm}</TableCell>
            </TableRow>
          ))}

          <TableRow style={{ backgroundColor: "#FAFF70" }}>
            <StyledTotalCell>
              <b>Total</b>
            </StyledTotalCell>
            <StyledTotalCell align="center">
              <b>{REFTotal}</b>
            </StyledTotalCell>
            <StyledTotalCell align="center">
              <b>{TVTotal}</b>
            </StyledTotalCell>
            <StyledTotalCell align="center">
              <b>{MWOTotal}</b>
            </StyledTotalCell>
            <StyledTotalCell align="center">
              <b>{RACTotal}</b>
            </StyledTotalCell>
            <StyledTotalCell align="center">
              <b>{WMTotal}</b>
            </StyledTotalCell>
          </TableRow>
          {/* <TableRow>
            <TableCell colSpan={2}>Total TV</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total RAC</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
