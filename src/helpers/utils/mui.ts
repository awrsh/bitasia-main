"use client";
import { TableRow, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


export const StyledTableRow = styled(TableRow)(() => ({
    position: "relative",
    border: 0,
    "&:nth-of-type(odd)": {
        backgroundColor: "#2b313c",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export const StyledTableCell = styled(TableCell)(() => ({
    border: 0,
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#2b313c",
        color: "#626262",
        fontFamily: "bold",
        whiteSpace: "nowrap",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        fontFamily: "num",
        color: "#fff",
        borderColor: "transparent",
    },
}));
