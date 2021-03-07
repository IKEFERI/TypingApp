import React from 'react';
import Alert from '@material-ui/core/Alert';
import {makeStyles} from "@material-ui/styles";
// TODO: так же кавычки в импортах

const CustomAlert = ({text, severity, style}) => {
    const classes = useStyles();

    return (
        <Alert className={classes.commonAlert} severity={severity} style={style}>
            {text}
        </Alert>
    );
};

// TODO: нужно определится с кавычками двойные или одинарные а лучше поставить ESLinter
const useStyles = makeStyles({
    commonAlert: {
        minHeight: '56px',
        display: "flex",
        alignItems: "center"
    }
});

export default CustomAlert;