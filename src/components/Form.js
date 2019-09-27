import React from "react"
import {Field, reduxForm} from 'redux-form'

const FormForNote = (props) => {

    let onSubmit = (value) => {
      let id = new Date().toJSON()
       props.postNotesToDB(value.noteText, id)
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
                <Field name="noteText" component="input" type="text" className="form-control form-control-lg"
                       placeholder={"Введите текст заметки"}/>
            </div>
            <div className="d-flex justify-content-center my-2">
            </div>
        </form>
    )
}

const NoteReduxForm = reduxForm({form: 'addNote'})(NoteForm)

export default FormForNote;
