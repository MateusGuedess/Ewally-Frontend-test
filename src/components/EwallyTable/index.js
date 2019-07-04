import React, { useState, Animated } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function EwallyTable({data}) {
    const [height, setHeight] = useState(0)
    const [display, setDisplay] = useState("none")

    const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
          marginTop: theme.spacing(3),
          overflowX: 'auto',
          height: '100%',
        },
        table: {
          minWidth: 650,
        },
      }));
    
    const classes = useStyles();

  return (
    <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Ação</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableHead>
            <TableBody >
            {data.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                      {row.createdAt}
                  </TableCell>
                  <TableCell>{row.operationType}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell onClick={() => console.log("teste")}>></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Paper>
  );
}
