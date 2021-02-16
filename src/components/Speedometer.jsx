import React, {useState} from 'react';
import {Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import useInterval from "../hooks/useInterval";
import {setSpeed} from "../redux/actions";

const Speedometer = () => {
    const dispatch = useDispatch();
    const [startTime, setStartTime] = useState((new Date).getTime());
    const [updateTime, setUpdateTime] = useState((new Date).getTime());
    const passedChar = useSelector(state => state.appState.passedChar);
    const speed = useSelector(state => state.appState.speed);
    const numSec = 1;

    useInterval(() => {
        setUpdateTime(((new Date).getTime() - startTime) / 1000);
        const speedCalc = Math.round(passedChar / updateTime * 60);
        dispatch(setSpeed(speedCalc));
    }, numSec * 1000);

    return (
        <Paper style={{padding: "24px", marginBottom: "36px"}}>
            <Typography style={{fontSize: '24px', fontWeight: 600}}>
                Знаков в минуту: {speed}
            </Typography>
        </Paper>
    );
};

export default Speedometer;