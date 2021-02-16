import {call, put, takeEvery} from "redux-saga/effects"
import {FETCH_TEXT, REQUEST_TEXT} from "./types";
import {hideLoader, showAlert, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_TEXT, sagaWorker);
}

function* sagaWorker(action) {
    try {
        yield put(showLoader());
        const payload = yield call(fetchText, action);
        yield put({type: FETCH_TEXT, payload});
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert());
        yield put(hideLoader());
    }


}

async function fetchText(action) {
    const response = await fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${action.difficult}&format=json`);
    return response.json();
}