import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAccuracy, setCountErrors} from "../redux/actions";
import {Grid, Paper, Typography} from "@material-ui/core";

const Accuracy = () => {
    const dispatch = useDispatch();
    const { countErrors, erroredChar, accuracy, allChars} = useSelector(state => state.appState)

    // TODO: будь внимателен к зависимостям в useEffect здесь не хватате 
    useEffect(() => {
        if (erroredChar) {
            dispatch(setCountErrors(countErrors + 1));
            console.log('Errors:', countErrors, erroredChar);
        }
    }, [erroredChar]);

    // TODO: здесь так же забыл указать allChars, dispatch
    useEffect(() => {
        const newAccuracy = (1000 - Math.round(1000 * countErrors / allChars)) / 10;
        if (newAccuracy) {
            dispatch(setAccuracy(newAccuracy));
        }
    }, [countErrors]);

    return (
        <>
            <Grid item xs={12} sm={4}>
                <Paper style={{padding: "24px"}}>
                    <Typography style={{fontSize: '24px', fontWeight: 600}}>Точность: {accuracy}%</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper style={{padding: "24px"}}>
                    <Typography style={{fontSize: '24px', fontWeight: 600}}>Ошибки: {countErrors}</Typography>
                </Paper>
            </Grid>
        </>

    );
};

export default Accuracy;