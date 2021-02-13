import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Char = ({id, char}) => {
    let [className, setClassName] = useState('default')

    const erroredChar = useSelector(state => state.appState.erroredChar);
    const passedChar = useSelector(state => state.appState.passedChar);

    useEffect(() => {
        if (erroredChar === id) {
            setClassName('errored')
        }
        if (passedChar === id) {
            setClassName('passed');
        }
    }, [erroredChar, passedChar])

    return (
        <span id={id} className={className}>{char}</span>
    );
};

export default Char;