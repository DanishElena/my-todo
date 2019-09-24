import React from "react";
import FormForNote from "./Form";
import {connect} from "react-redux";
import {compose} from "redux";
import {addNote} from "../reducers/formReducer";


let mapStateToProps = (state) => {
    return {
        notes: state.formRed.notes,
        noteText: state.formRed.noteText,
    }
}

class FormContainer extends React.Component {

    render() {
        return <>

            <FormForNote notes={this.props.notes}
                   noteText={this.props.noteText}
                         addNote={this.props.addNote}
            />
        </>
    }

}

export default compose(connect(mapStateToProps, { addNote }))(FormContainer);
