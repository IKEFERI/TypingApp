import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import CustomAlert from "./CustomAlert";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const HintsContainer = () => {
    const classes = useStyles();
    const { showLoader, erroredChar, passedChar, showAlert} = useSelector(state => state.appState)

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Hints {...{passedChar, erroredChar,showAlert, showLoader}}/>
            </Paper>
        </Grid>
    )
};

const useStyles = makeStyles({
    paper: {
        padding: '24px'
    },
});

const Hints = ({showAlert, showLoader, erroredChar, passedChar}) => {
    if (showAlert) {
        return <CustomAlert severity="error"
                            text="Не получилось загрузить текст. Убедитесь что интернет подключен и обновите страницу."/>
    }

    if (showLoader) {
        return <CustomAlert severity="info"
                            text="Подождите, текст сейчас загрузится!"/>
    }

    if (erroredChar) {
        return <CustomAlert severity="error"
                            text="Упс! Ошибочка. Постарайся печатать внимательнее."/>
    }

    if (passedChar) {
        return <CustomAlert severity="success"
                            text="Молодец! Продолжай в том же духе!"/>
    }

    return <CustomAlert severity="warning"
                        text="Начните печатать, только не торопитесь. Старайтесь четко прожимать клавиши, не забудьте о правильном положении пальцев на клавиатуре. У вас все получится!"/>
}



export default HintsContainer;