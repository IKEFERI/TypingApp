import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
    fetchText,
    resetGame,
    setAllChars,
    setCurrentChar,
    setDoneGame,
    setErroredChar,
    setPassedChar
} from "../redux/actions";
import Preloader from "./Preloader";
import Char from "./Char";


const keyPressedEqualToText = (key, char) => {
        return key === char;
}

const checkKeyboard = (e)=>{
   const regex = /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_]/g;
   const match = e.key.match(regex);
    if (match === null){
        alert('Error 2:\nNon English keyboard layout is detected!\nSet the keyboard layout to English and try to fill out the field again.');
        return false;
    }
    return true;
}

function FetchedText() {
    const dispatch = useDispatch();
    const text = useSelector(state => state.appState.fetchedText).toString();
    const difficulty = useSelector(state => state.appState.difficultyGame);
    const showLoader = useSelector(state => state.appState.showLoader);
    const erroredChar = useSelector(state => state.appState.erroredChar);
    const currentChar = useSelector(state => state.appState.currentChar);

    useEffect(() => {
        if(difficulty){
            dispatch(fetchText(difficulty));
        }
    }, [difficulty]);

    useEffect(() => {
        dispatch(setAllChars(text.length));
    }, [text,resetGame]);

    useEffect(() => {

        const keyPressedListener = e => {
            let keyPressed = e.key;
            let char = text[currentChar];
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