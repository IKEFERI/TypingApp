import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleWare from "redux-saga";
import {sagaWatcher} from "./sagas";
import appReducer from "./appReducer";

const saga = createSagaMiddleWare();


let reducers = combineReducers({
    appState: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(saga)
);

const store = createStore(reducers, enhancers);

saga.run(sagaWatcher);

export default store;