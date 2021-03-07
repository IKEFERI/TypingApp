import React from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import useSpeedMeasurement from '../hooks/useSpeedMeasurement';

const Speedometer = () => {
    const { speed } = useSpeedMeasurement()

    return (
        <Grid item xs={12} sm={4}>
            <Paper style={{padding: "24px"}}>
                <Typography style={{fontSize: '24px', fontWeight: 600}}>
                    Зн./мин.: {speed}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Speedometer;