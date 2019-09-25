import {notesAPI} from "../api";
import {getNotesToNC, setNotes} from "./notesReducer";

const ADD_NOTE = 'ADD_NOTE';


let initialState = {
    notes: [],
    noteText: "",
};

const formForReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            let newNote = {
                id: action.id,
                noteText: action.noteText,
            };
            let stateCopy = {
                ...state,
                notes: [...state.notes, newNote],
            };
            return stateCopy;


        default:
            return state;

    }
}


export const postNotesToDB = (noteText, id) => {
    return async (dispatch) => {
        dispatch(addNote(noteText, id))
        let data = await notesAPI.postNote(noteText, id)
        let {noteText, id} = data.data
       dispatch(setNotes({noteText, id}))
    }
}


export const addNote = (noteText, id) => ({type: ADD_NOTE, noteText, id});


export default formForReducer;


