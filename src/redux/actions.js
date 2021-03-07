import * as types from "./types";

export const fetchText = (difficult) => ({type: types.REQUEST_TEXT, difficult})

export const showLoader = () => ({type: types.SHOW_LOADER})

export const hideLoader = () => ({type: types.HIDE_LOADER})

export const showAlert = () => ({type: types.SHOW_ALERT})

export const setErroredChar = (key) => ({type: types.SET_ERRORED_CHAR, key})

export const setCurrentChar = (key) => ({type: types.SET_CURRENT_CHAR, key})

export const setPassedChar = (key) => ({type: types.SET_PASSED_CHAR, key})

export const setCountErrors = (numb) => ({type: types.SET_COUNT_ERRORS, numb})

export const setAllChars = (numb) => ({type: types.SET_ALL_CHARS, numb})

export const setAccuracy = (percent) => ({type: types.SET_ACCURACY, percent})

export const setSpeed = (speed) => ({type: types.SET_SPEED, speed})

export const layoutKeyCheck = (bool) => ({type: types.LAYOUT_KEY_CHECK, bool})

export const resetGame = () => ({type: types.SET_START_GAME})

export const setDifficultyGame = (difficult) => ({type: types.SET_DIFFICULTY_GAME, difficult})