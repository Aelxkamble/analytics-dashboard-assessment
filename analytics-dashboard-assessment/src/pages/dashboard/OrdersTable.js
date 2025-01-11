import PropTypes from "prop-types";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { NumericFormat } from "react-number-format";

import Dot from "components/@extended/Dot";

function createData(vin, make, modelYear, electricRange) {
  return { vin, make, modelYear, electricRange };
}

// const rows = [
//   createData(84564564, "Camera Lens", 40, 2, 40570),
//   createData(98764564, "Laptop", 300, 0, 180139),
//   createData(98756325, "Mobile", 355, 1, 90989),
//   createData(98652366, "Handset", 50, 1, 10239),
//   createData(13286564, "Computer Accessories", 100, 1, 83348),
//   createData(86739658, "TV", 99, 0, 410780),
//   createData(13256498, "Keyboard", 125, 2, 70999),
//   createData(98753263, "Mouse", 89, 2, 10570),
//   createData(98753275, "Desktop", 185, 1, 98063),
//   createData(98753291, "Chair", 100, 0, 14001),
// ];
const rows = [
  createData("5YJYGDEE1L", "TESLA", 2020, 291),
  createData("7SAYGDEE9P", "TESLA", 2023, 0),
  createData("5YJSA1E4XK", "TESLA", 2019, 270),
  createData("5YJSA1E27G", "TESLA", 2016, 210),
  createData("5YJYGDEE5M", "TESLA", 2021, 0),
  createData("3FA6P0SU8H", "FORD", 2017, 21),
  createData("1N4AZ0CP2D", "NISSAN", 2013, 75),
  createData("KNAGV4LD9J", "KIA", 2018, 29),
  createData("1N4AZ0CP8F", "NISSAN", 2015, 84),
  createData("5YJYGDEE1M", "TESLA", 2022, 300),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "vin",
    align: "left",
    disablePadding: false,
    label: "VIN",
  },
  {
    id: "make",
    align: "left",
    disablePadding: true,
    label: "Make",
  },
  {
    id: "modelYear",
    align: "right",
    disablePadding: false,
    label: "Model Year",
  },
  {
    id: "electricRange",
    align: "left",
    disablePadding: false,

    label: "Electric Range",
  },
];

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState("asc");
  const [orderBy] = useState("trackingNo");
  const [selected] = useState([]);

  const isSelected = (vin) => selected.indexOf(vin) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            "& .MuiTableCell-root:first-of-type": {
              pl: 2,
            },
            "& .MuiTableCell-root:last-of-type": {
              pr: 3,
            },
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map(
              (row, index) => {
                const isItemSelected = isSelected(row.vin);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.vin}
                    selected={isItemSelected}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="left"
                    >
                      <Link color="secondary" component={RouterLink} to="">
                        {row.vin}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.make}</TableCell>
                    <TableCell align="right">{row.modelYear}</TableCell>
                    <TableCell align="left">
                      {/* <OrderStatus status={row.carbs} /> */}
                      <TableCell align="right">{row.electricRange}</TableCell>
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
