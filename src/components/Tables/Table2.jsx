import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(model, product, order, balance) {
  return { model, product, order, balance };
}

const rows = [
  createData("QA85Q70AARSFS", "TV", 2, 0),
  createData("RB21KMFH5SE/D3", "REF", 22, 4),
  createData("KWDOI532DSS/D3", "REF", 5, 0),
  createData("OPWDKMCSKSW/D3", "REF", 5, 3),
  createData("NDKJDU352JM/D3", "REF", 2, 0),
  createData("QWYEPW324DS/D3", "RAC", 2, 0),
  createData("ARHDOIWELDDKDO", "RAC", 2, 0),
  createData("AREJNMDKCOMCLO", "RAC", 2, 0),
  createData("AR25DJS3HJD3NM", "RAC", 4, 2),
  createData("AR24MGOIFBFISF", "RAC", 4, 2),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Model</StyledTableCell>
            <StyledTableCell align="center">Product/Plant</StyledTableCell>
            <StyledTableCell align="center">Order Q'ty</StyledTableCell>
            <StyledTableCell align="center">Balance Q'ty</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.model}</StyledTableCell>
              <StyledTableCell align="center">{row.product}</StyledTableCell>
              <StyledTableCell align="center">{row.order}</StyledTableCell>
              <StyledTableCell align="center">{row.balance}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
