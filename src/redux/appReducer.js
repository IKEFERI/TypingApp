import * as types from "./types";

const initialState = {
    // ["Pork loin pork chop pig meatball burgdoggen strip steak. Pork chop sirloin bacon, alcatra pig tenderloin fatback jowl."]
    fetchedText: '',
    showLoader: true,
    showAlert: false,
    difficultyGame: 0,
    erroredChar: null,
    passedChar: null,
    currentChar: 0,
    countErrors: 0,
    allChars: 0,
    accuracy: 100.00,
    speed: 0,
    layoutKeyCheck: true,
    reset: 0,
    measurementFrequencyInSeconds: 1,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TEXT:
            return {...state, fetchedText: action.payload}
        case types.SHOW_LOADER:
            return {...state, showLoader: true}
        case types.SHOW_ALERT:
            return {...state, showAlert: true}
        case types.HIDE_LOADER:
            return {...state, showLoader: false}
        case types.HIDE_ALERT:
            return {...state, showAlert: false}
        case types.SET_DIFFICULTY_GAME:
            return {...state, difficultyGame: action.difficult}
        case types.SET_ERRORED_CHAR:
            return {...state, erroredChar: action.key}
        case types.SET_PASSED_CHAR:
            return {...state, passedChar: action.key}
        case types.SET_COUNT_ERRORS:
            return {...state, countErrors: action.numb}
        case types.SET_ALL_CHARS:
            return {...state, allChars: action.numb}
        case types.SET_ACCURACY:
            return {...state, accuracy: action.percent}
        case types.SET_SPEED:
            return {...state, speed: action.speed}
        case types.SET_CURRENT_CHAR:
            return {...state, currentChar: action.key}
        case types.LAYOUT_KEY_CHECK:
            return {...state, layoutKeyCheck: action.bool}
        case types.SET_START_GAME:
            return {...initialState, reset: state.reset + 1
            }
        default:
            return {...state}
    }
}

export default appReducer;
