import React from "react"
import {Field, reduxForm} from 'redux-form'


const FormForNote = (props) => {

    let onSubmit = (value) => {
        props.addNote(value.noteText);
        console.log(value.noteText)
    }




    return (
            <div>
                <NoteReduxForm onSubmit={onSubmit}/>
            </div>
    )
}


const NoteForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="noteText" component="input" type="text" className="form-control form-control-lg"/>
            </div>
            <div className="d-flex justify-content-center my-2">
            <button type="submit" className="btn btn-success">Добавить заметку</button>
            </div>
        </form>
    )
}

const NoteReduxForm = reduxForm({form: 'addNote'})(NoteForm)

export default FormForNote;
