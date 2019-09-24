import React from 'react';
import {connect} from "react-redux";
import {
    deleteNote,
    noteIsDisplaying,
    setNotes
} from "../reducers/notesReducer";
import {Notes} from "./Notes";
import {compose} from "redux";
import {Loader} from "./Loader";


let mapStateToProps = (state) => {
    return {
        notes: state.formRed.notes,

        isDisplayed: state.notesRed.isDisplayed
    }
}

class NotesContainer extends React.Component {


    render() {
        return <>
            {!this.props.noteIsDisplaying ? <Loader/> : null}
            <Notes notes={this.props.notes}
                   noteText={this.props.noteText}
                   isDisplayed={this.props.isDisplayed}
                   deleteNote={this.props.deleteNote}
                   setNotes={this.props.setNotes}


            />
        </>
    }

}

export default compose(connect(mapStateToProps, { deleteNote, noteIsDisplaying, setNotes }))
(NotesContainer);





