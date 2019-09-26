import React from 'react';
import {connect} from "react-redux";
import {
    removeNote, getNotesToNC,
    noteIsDisplaying,
    setNotes, deleteNoteFromNC
} from "../reducers/notesReducer";
import {Notes} from "./Notes";
import {compose} from "redux";
import {Loader} from "./Loader";


let mapStateToProps = (state) => {
    return {
        notes: state.notesRed.notes,
        isDisplayed: state.notesRed.isDisplayed
    }
}

class NotesContainer extends React.Component {

    componentDidMount() {
        this.props.getNotesToNC()
    }


    render() {
        return <>
            {!this.props.noteIsDisplaying ? <Loader/> : null}
            <Notes notes={this.props.notes}
                   isDisplayed={this.props.isDisplayed}
                   removeNote={this.props.removeNote}
                   getNotesToNC={this.props.getNotesToNC}
                   noteIsDisplaying={this.props.noteIsDisplaying}
                   deleteNoteFromNC={this.props.deleteNoteFromNC}
            />
        </>
    }

}

export default compose(connect(mapStateToProps, {removeNote, noteIsDisplaying, setNotes, getNotesToNC, deleteNoteFromNC}))
(NotesContainer);





