import {
    FETCH_TEXT,
    HIDE_ALERT,
    HIDE_LOADER,
    REQUEST_TEXT,
    SET_ERRORED_CHAR,
    SET_PASSED_CHAR,
    SHOW_ALERT,
    SHOW_LOADER
} from "./types";

const initialState = {
    fetchedText: "",
    showLoader: true,
    showAlert: false,
    difficultyGame: 1,
    erroredChar: '',
    passedChar: '',
    textAlert: ''
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEXT:
            return {...state, fetchedText: action.payload}
        case REQUEST_TEXT:
            return {...state,}
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
        default:
            return {...state}
    }
}

export default appReducer;
