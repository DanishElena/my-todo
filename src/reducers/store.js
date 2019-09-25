import {reducer as formReducer} from "redux-form";
import noteReducer from "./notesReducer";
import alertReducer from "./alertReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import formForReducer from "./formReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    notesRed: noteReducer,
    alertRed: alertReducer,
    form: formReducer,
    formRed: formForReducer,
    appRed: appReducer
});


const store = createStore(reducers, (applyMiddleware(thunkMiddleware)))
window.__store__ = store;


export default store;