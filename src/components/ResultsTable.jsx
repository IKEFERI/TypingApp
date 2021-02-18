import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650

    },
    row: {
        fontSize: '18px'
    },
    hideLastBorder: {
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    },
});

const ResultsTable = () => {
    const classes = useStyles();
    let results = JSON.parse(localStorage.getItem("results"));
    const reset = useSelector(state => state.appState.reset);
    useEffect(() => {
        results = JSON.parse(localStorage.getItem("results"));
    }, [reset]);

    if (results) {
        return (
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="medium" aria-label="a results table">
                        <TableHead>
                            <TableRow className={classes.row}>
                                <TableCell>Попытка №</TableCell>
                                <TableCell align="right">Сложность</TableCell>
                                <TableCell align="right">Точность</TableCell>
                                <TableCell align="right">Ошибок</TableCell>
                                <TableCell align="right">Скорость зн./мин.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {results.map((row, index) => (
                                <TableRow key={index} className={classes.hideLastBorder}>
                                    <TableCell component="th" scope="row">  {index + 1} </TableCell>
                                    <TableCell align="right">{row.difficult}</TableCell>
                                    <TableCell align="right">{row.accuracy}%</TableCell>
                                    <TableCell align="right">{row.errors}</TableCell>
                                    <TableCell align="right">{row.speed}</TableCell>
                                </TableRow>
                            )).reverse()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        )
    }
    return <Grid item xs={12}><Paper style={{padding: '16px', fontSize: '18px', fontWeight: '700'}}>Здесь отобразятся ваши попытки.</Paper></Grid>
};

export default ResultsTable;