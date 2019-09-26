import React from 'react';
import {connect} from "react-redux";
import {hideAlertAction, showAlertAction} from "../reducers/alertReducer";
import {Alert} from "./Alert";


let mapStateToProps = (state) => {
    return {
        visible: state.alertRed.visible,
        text: state.alertRed.text,
        kind: state.alertRed.kind
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showAlert: (text, kind, visible) => {
            dispatch(showAlertAction(text, kind, visible));
        },
        hideAlert: (visible) => {
            dispatch(hideAlertAction(visible));
        }
    }
}


export const AlertContainer = connect(mapStateToProps, mapDispatchToProps)(Alert);

