import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
    fetchText, layoutKeyCheck,
    resetGame,
    setAllChars,
    setCurrentChar,
    setErroredChar,
    setPassedChar
} from "../redux/actions";
import Preloader from "./Preloader";
import Char from "./Char";


const keyPressedEqualToText = (key, char) => {
        return key === char;
}

const checkKeyboard = (e)=>{
    if (e.code === "Space"){
        return true;
    }
   const regex = /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\`\:\;\_]/g;
   const match = e.key.match(regex);
   return match !== null;
}

function FetchedText() {
    const dispatch = useDispatch();
    const text = useSelector(state => state.appState.fetchedText).toString();
    const difficulty = useSelector(state => state.appState.difficultyGame);
    const showLoader = useSelector(state => state.appState.showLoader);
    const erroredChar = useSelector(state => state.appState.erroredChar);
    const currentChar = useSelector(state => state.appState.currentChar);
    const allChars = useSelector(state => state.appState.allChars);


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

            if(currentChar === allChars){
                return;
            }

            if(keyPressed === 'Shift' || keyPressed === 'Alt'){
                return;
            }

            if(checkKeyboard(e)){
                dispatch(layoutKeyCheck(true));
            } else {
               dispatch(layoutKeyCheck(false));
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
    }, [currentChar, text, erroredChar,allChars]);


    if (showLoader) {
        return <Preloader/>
    }

    return text.split("").map((char, indexChar) => {
        return <Char key={indexChar} id={indexChar} char={char}/>
    });
}

export default FetchedText;