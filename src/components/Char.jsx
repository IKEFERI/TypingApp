import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Char = ({id, char}) => {
    const [className, setClassName] = useState('default');

    const erroredChar = useSelector(state => state.appState.erroredChar);
    const passedChar = useSelector(state => state.appState.passedChar);
    const currentChar = useSelector(state => state.appState.currentChar);

    useEffect(() => {
        if (currentChar === id) {
            setClassName('next');
        }
        if (erroredChar === id) {
            setClassName('errored');
        }
        if (passedChar === id) {
            setClassName('passed');
        }

    }, [currentChar, erroredChar])

    return (
        <span id={id} className={className}>{char}</span>
    );
};

export default Char;