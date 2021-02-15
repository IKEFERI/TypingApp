import React from 'react';
import Alert from '@material-ui/core/Alert';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    commonAlert: {
        minHeight: '56px',
        display: "flex",
        alignItems: "center"
    }
});


const CustomAlert = ({text, severity, style}) => {
    const classes = useStyles();

    return (
        <Alert className={classes.commonAlert} severity={severity} style={style}>
            {text}
        </Alert>
    );
};

export default CustomAlert;