import {HIDE_LOADER, REQUEST_TEXT, SET_ERRORED_CHAR, SET_PASSED_CHAR, SHOW_ALERT, SHOW_LOADER} from "./types";

export function fetchText(numbParas) {
    return {type: REQUEST_TEXT, numbParas}
}

export function showLoader() {
    return {type: SHOW_LOADER}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}

export function showAlert(text) {
    return {type: SHOW_ALERT, text}
}
export function setErroredChar(key) {
    return {type: SET_ERRORED_CHAR, key}
}
export function setPassedChar(key) {
    return {type: SET_PASSED_CHAR, key}
}