import {call, put, takeEvery} from "redux-saga/effects"
import {FETCH_TEXT, REQUEST_TEXT} from "./types";
import {hideLoader, showAlert, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_TEXT, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchText);
        yield put({type: FETCH_TEXT, payload});
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert());
        yield put(hideLoader());
    }


}

async function fetchText(numbParas = 5) {
    const response = await fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${numbParas}&format=json`);
    return response.json();
}