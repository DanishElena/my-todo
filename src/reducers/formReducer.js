import {notesAPI} from "../api";
import {getNotesToNC, setNotes} from "./notesReducer";

const ADD_NOTE = 'ADD_NOTE';


let initialState = {
    notes: [],
    noteText: "",
    id: ""
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
        dispatch(getNotesToNC())
        dispatch(addNote(noteText, id))
        dispatch(getNotesToNC())
        let data = await notesAPI.postNote(noteText, id)
       dispatch(setNotes(data));
    }
}


export const addNote = (noteText, id) => ({type: ADD_NOTE, noteText, id});


export default formForReducer;


