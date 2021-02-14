import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchText, setAllChars, setCurrentChar, setErroredChar, setPassedChar} from "../redux/actions";
import Preloader from "./Preloader";
import Char from "./Char";


const keyPressedEqualToText = (key, char) => {
    return key === char;
}

function Text() {
    const dispatch = useDispatch();
    const text = useSelector(state => state.appState.fetchedText).toString();
    const difficulty = useSelector(state => state.appState.difficultyGame);
    const showLoader = useSelector(state => state.appState.showLoader);
    const erroredChar = useSelector(state => state.appState.erroredChar);
    const currentChar = useSelector(state => state.appState.currentChar);

    useEffect(() => {
        dispatch(fetchText(difficulty))
    }, [dispatch, fetchText, difficulty]);

    useEffect(() => {
        dispatch(setAllChars(text.length));
    }, [text]);

    useEffect(() => {

        const keyPressedListener = e => {
            let keyPressed = e.key;
            console.log(keyPressed);
            let char = text[currentChar];
            let lengthString = text.length;

            if (keyPressedEqualToText(keyPressed, char)) {
                console.log('Catch!');
                dispatch(setErroredChar(''));
                dispatch(setPassedChar(currentChar));
                dispatch(setCurrentChar(currentChar + 1));
            } else {
                dispatch(setErroredChar(currentChar));
                console.log('Miss! - ', currentChar, char);
            }

            if (lengthString === (currentChar - 1)) {
                console.log('Congratulations!!!');
            }
        }

        document.addEventListener('keypress', keyPressedListener);

        return () => {
            document.removeEventListener('keypress', keyPressedListener);
        }
    }, [currentChar, text, erroredChar]);


    if (showLoader) {
        return <Preloader/>
    }

    return text.split("").map((char, indexChar) => {
        return <Char key={indexChar} id={indexChar} char={char}/>
    });
}

export default Text;