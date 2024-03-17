"use client";
import { TableRow, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useTheme } from "next-themes";


export const StyledTableRow = styled(TableRow)(() => {
    const { theme } = useTheme()
    return ({
        position: "relative",
        border: 0,
        "&:nth-of-type(odd)": {
            backgroundColor: theme === "dark" ? "#2b313c" : "#fff",
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    })
});

export const StyledTableCell = styled(TableCell)(() => {
    const { theme } = useTheme()
    return ({
        border: 0,
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme === "dark" ? "#2b313c" : "#fff",
            color: "#626262",
            fontFamily: "bold",
            whiteSpace: "nowrap",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 12,
            fontFamily: "num",
            color: theme === "dark" ? "#fff" : "#2b313c",
            borderColor: "transparent",
            padding: "15px"
        },
    })
});
