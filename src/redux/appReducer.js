import {
    FETCH_TEXT,
    HIDE_ALERT,
    HIDE_LOADER,
    SET_ACCURACY, SET_ALL_CHARS, SET_COUNT_ERRORS, SET_CURRENT_CHAR,
    SET_ERRORED_CHAR,
    SET_PASSED_CHAR,
    SHOW_ALERT,
    SHOW_LOADER
} from "./types";

const initialState = {
    // ["Pork loin pork chop pig meatball burgdoggen strip steak. Pork chop sirloin bacon, alcatra pig tenderloin fatback jowl."]
    fetchedText: '',
    showLoader: true,
    showAlert: false,
    difficultyGame: 1,
    erroredChar: null,
    passedChar: null,
    currentChar: 0,
    countErrors: 0,
    allChars: 0,
    accuracy: 100.00
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEXT:
            return {...state, fetchedText: action.payload}
        case SHOW_LOADER:
            return {...state, showLoader: true}
        case SHOW_ALERT:
            return {...state, showAlert: true}
        case HIDE_LOADER:
            return {...state, showLoader: false}
        case HIDE_ALERT:
            return {...state, showAlert: false}
        case SET_ERRORED_CHAR:
            return {...state, erroredChar: action.key}
        case SET_PASSED_CHAR:
            return {...state, passedChar: action.key}
        case SET_COUNT_ERRORS:
            return {...state, countErrors: action.numb}
        case SET_ALL_CHARS:
            return {...state, allChars: action.numb}
        case SET_ACCURACY:
            return {...state, accuracy: action.percent}
        case SET_CURRENT_CHAR:
            return {...state, currentChar: action.key}
        default:
            return {...state}
    }
}

export default appReducer;
