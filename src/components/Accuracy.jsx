import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAccuracy, setCountErrors} from "../redux/actions";
import {Typography} from "@material-ui/core";

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
        <Typography variant="h3">
            {countErrors} , {accuracy}%
        </Typography>
    );
};

export default Accuracy;