import React from 'react';
import {connect} from "react-redux";
import {hideAlertAction, showAlertAction} from "../reducers/alertReducer";
import {Alert} from "./Alert";


let mapStateToProps = (state) => {
    return {
        notes: state.alertRed.notes,
        visible: state.alertRed.visible
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showAlert: (notes) => {
            dispatch(showAlertAction(notes));
        },
        hideAlertAction: () => {
            dispatch(hideAlertAction());
        }
    }
}


const AlertContainer = connect(mapStateToProps, mapDispatchToProps)(Alert);

export default AlertContainer;