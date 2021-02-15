import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchText, setAllChars, setCurrentChar, setErroredChar, setPassedChar} from "../redux/actions";
import Preloader from "./Preloader";
import Char from "./Char";


const keyPressedEqualToText = (key, char) => {
        return key === char;
}

function FetchedText() {
    const dispatch = useDispatch();
    const text = useSelector(state => state.appState.fetchedText).toString();
    const difficulty = useSelector(state => state.appState.difficultyGame);
    const showLoader = useSelector(state => state.appState.showLoader);
    const erroredChar = useSelector(state => state.appState.erroredChar);
    const currentChar = useSelector(state => state.appState.currentChar);


    useEffect(() => {
        dispatch(fetchText(difficulty));
    }, [difficulty]);

    useEffect(() => {
        dispatch(setAllChars(text.length));
    }, [text]);

    useEffect(() => {

        const keyPressedListener = e => {
            let keyPressed = e.key;
            let char = text[currentChar];
            let lengthString = text.length;

            if(keyPressed === 'Shift'){
                return;
            }

            if (keyPressedEqualToText(keyPressed, char)) {
                dispatch(setErroredChar(''));
                dispatch(setPassedChar(currentChar));
                dispatch(setCurrentChar(currentChar + 1));
            } else {
                dispatch(setErroredChar(currentChar));
            }

            if (currentChar === lengthString) {
                console.log('Congratulations!!!');
            }
        }

        document.addEventListener('keydown', keyPressedListener);

        return () => {
            document.removeEventListener('keydown', keyPressedListener);
        }
    }, [currentChar, text, erroredChar]);


    if (showLoader) {
        return <Preloader/>
    }

    return text.split("").map((char, indexChar) => {
        return <Char key={indexChar} id={indexChar} char={char}/>
    });
}

export default FetchedText;