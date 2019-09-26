import React from "react"

export const Alert = (props) => {

    return (
        <div>
        { props.visible ? <div className={`alert alert-${props.kind || "warning"} alert-dismissible`}>
                <strong>Внимание!</strong> &nbsp;{props.text}
                <button type="button" onClick={() => props.hideAlert(false)} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> : null }
        </div>
    )
}