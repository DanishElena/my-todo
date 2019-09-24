import React from "react"

export const Alert = (props) => {

    return (
        <div className=" alert alert-warning alert-dismissible">
            <strong>Внимание!</strong>
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}