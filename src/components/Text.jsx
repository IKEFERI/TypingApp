import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchText, setErroredChar, setPassedChar} from "../redux/actions";
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

    useEffect(() => {
        dispatch(fetchText(difficulty))
    }, [dispatch, fetchText, difficulty])


    useEffect(() => {

        let indexChar = 0;

        const keyPressedListener = e => {
            let keyPressed = e.key;
            console.log(keyPressed);
            let char = text[indexChar];
            let lengthString = text.length;

            if (keyPressedEqualToText(keyPressed, char)) {
                console.log('Catch!');
                dispatch(setErroredChar(''));
                dispatch(setPassedChar(indexChar));
                indexChar++;
            } else {
                dispatch(setErroredChar(indexChar));
                console.log('Miss! - ', indexChar, char, text)
            }

            if (lengthString === (indexChar - 1)) {
                console.log('Congratulations!!!');
            }
        }

        document.addEventListener('keypress', keyPressedListener);

        return () => {
            document.removeEventListener('keypress', keyPressedListener);
        }
    }, [text]);


    if (showLoader) {
        return <Preloader/>
    }

    return text.split("").map((char, indexChar) => {
        return <Char key={indexChar} id={indexChar} char={char}/>
    });
}

export default Text;