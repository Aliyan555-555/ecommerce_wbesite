import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper} className="text-2xl overflow-auto">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="h6">Index</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Image</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Email</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Orders</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.User?.map((item, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="hover:bg-hover border-b border-b-hover"
            >
              <TableCell component="th" scope="row">
                <Typography variant="h6">{i}</Typography>
              </TableCell>
              <td className="p-[16px] border-b border-b-hover">
                <Image
                  src={item.image ? item.image : "/defult.jpg"}
                  width={30}
                  height={30}
                  alt="image"
                  className="w-[4rem] h-[4rem] rounded-full"
                />
              </td>
              <TableCell align="left">
                <Typography variant="h6">{item.email}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">{item.name}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">{"9"}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
