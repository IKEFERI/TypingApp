import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    passed: {
        color: '#00bb0985'
    },
    next: {
        backgroundColor: '#00b377',
        padding: '3px',
        borderRadius: '4px',
        color: '#fff'
    },
    errored: {
        backgroundColor: '#ff4646',
        padding: '3px',
        borderRadius: '4px',
        color: '#fff'
    }
});


const Char = ({id, char}) => {
    const classes = useStyles();
    const [className, setClassName] = useState('default');
    const erroredChar = useSelector(state => state.appState.erroredChar);
    const passedChar = useSelector(state => state.appState.passedChar);
    const currentChar = useSelector(state => state.appState.currentChar);

    useEffect(() => {
        if (currentChar === id) {
            setClassName(classes.next);
        }
        if (erroredChar === id) {
            setClassName(classes.errored);
        }
        if (passedChar === id) {
            setClassName(classes.passed);
        }
    }, [currentChar, erroredChar])

    return (
        <span id={id} className={className}>{char}</span>
    );
};

export default Char;