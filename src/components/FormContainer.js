import React from "react";
import FormForNote from "./Form";
import {connect} from "react-redux";
import {compose} from "redux";
import {postNotesToDB} from "../reducers/formReducer";


let mapStateToProps = (state) => {
    return {
        notes: state.formRed.notes,
        noteText: state.formRed.noteText,
        id: state.formRed.id
    }
}

class FormContainer extends React.Component {

    render() {
        return <>

            <FormForNote notes={this.props.notes}
                   noteText={this.props.noteText}
                         postNotesToDB={this.props.postNotesToDB}
                         id={this.props.id}
            />
        </>
    }

}

export default compose(connect(mapStateToProps, { postNotesToDB }))(FormContainer);
