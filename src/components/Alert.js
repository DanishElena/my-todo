import React from "react"
import {CSSTransition} from "react-transition-group";

export const Alert = (props) => {

    return (
        <CSSTransition
            in={props.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter>
        <div>
        { props.visible ? <div className={`alert alert-${props.kind || "warning"} alert-dismissible`}>
                <strong>Внимание!</strong> &nbsp;{props.text}
                <button type="button" onClick={() => props.hideAlert(false)} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> : null }
        </div>
        </CSSTransition>
    )
}