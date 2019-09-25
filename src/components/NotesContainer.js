import React from 'react';
import {connect} from "react-redux";
import {
    deleteNote, getNotesToNC,
    noteIsDisplaying,
    setNotes
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

// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     if(this.props.notes!==nextProps.notes) return true;
// }

    render() {
        return <>
          {/*{!this.props.noteIsDisplaying ? <Loader/> : null}*/}
            <Notes notes={this.props.notes}
                   isDisplayed={this.props.isDisplayed}
                   deleteNote={this.props.deleteNote}
                   getNotesToNC={this.props.getNotesToNC}

            />
        </>
    }

}

export default compose(connect(mapStateToProps, { deleteNote, noteIsDisplaying, setNotes, getNotesToNC }))
(NotesContainer);





