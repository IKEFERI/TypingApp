import {
    HIDE_LOADER, LAYOUT_KEY_CHECK,
    REQUEST_TEXT, SET_ACCURACY, SET_ALL_CHARS, SET_COUNT_ERRORS, SET_CURRENT_CHAR, SET_DIFFICULTY_GAME, SET_DONE_GAME,
    SET_ERRORED_CHAR,
    SET_PASSED_CHAR, SET_SPEED, SET_START_GAME,
    SHOW_ALERT,
    SHOW_LOADER
} from "./types";

export function fetchText(difficult) {
    return {type: REQUEST_TEXT, difficult}
}

export function showLoader() {
    return {type: SHOW_LOADER}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}

export function showAlert() {
    return {type: SHOW_ALERT}
}

export function setErroredChar(key) {
    return {type: SET_ERRORED_CHAR, key}
}

export function setCurrentChar(key) {
    return {type: SET_CURRENT_CHAR, key}
}

export function setPassedChar(key) {
    return {type: SET_PASSED_CHAR, key}
}

export function setCountErrors(numb) {
    return {type: SET_COUNT_ERRORS, numb}
}

export function setAllChars(numb) {
    return {type: SET_ALL_CHARS, numb}
}

export function setAccuracy(percent) {
    return {type: SET_ACCURACY, percent}
}

export function setSpeed(speed) {
    return {type: SET_SPEED, speed}
}

export function layoutKeyCheck(bool) {
    return {type: LAYOUT_KEY_CHECK, bool}
}

export function setDoneGame() {
    return {type: SET_DONE_GAME}
}

export function resetGame() {
    return {type: SET_START_GAME}
}

export function setDifficultyGame(difficult) {
    return {type: SET_DIFFICULTY_GAME, difficult}
}