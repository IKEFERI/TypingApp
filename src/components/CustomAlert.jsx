import React from 'react';
import Alert from '@material-ui/lab/Alert';

const CustomAlert = ({text, severity, style}) => {
    return (
        <Alert severity={severity} style={style}>
            {text}
        </Alert>
    );
};

export default CustomAlert;