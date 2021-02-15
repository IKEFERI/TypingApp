import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAccuracy, setCountErrors} from "../redux/actions";
import {Paper, Typography} from "@material-ui/core";

const Accuracy = () => {
    const dispatch = useDispatch();
    const countErrors = useSelector(state => state.appState.countErrors);
    const erroredChar = useSelector(state => state.appState.erroredChar);
    const accuracy = useSelector(state => state.appState.accuracy);
    const allChars = useSelector(state => state.appState.allChars);

    useEffect(() => {
        if (erroredChar) {
            dispatch(setCountErrors(countErrors + 1));
            console.log('Errors:', countErrors, erroredChar);
        }
    }, [erroredChar]);

    useEffect(() => {
        let newAccuracy = 0;
        newAccuracy = (1000 - Math.round(1000 * countErrors / allChars)) / 10;

        if (newAccuracy) {
            dispatch(setAccuracy(newAccuracy));
        }
    }, [countErrors]);

    return (
        <Paper style={{padding: "24px", marginBottom: "36px"}}>
            <Typography style={{fontSize: '24px', fontWeight: 600}}>Errors {countErrors}, accuracy: {accuracy}%</Typography>

        </Paper>
    );
};

export default Accuracy;