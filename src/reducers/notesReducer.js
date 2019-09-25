import {notesAPI} from "../api";



const DELETE_NOTE = 'DELETE_NOTE';
const NOTE_IS_DISPLAYED = 'NOTE_IS_DISPLAYED';
const SET_NOTES = 'SET_NOTES';

let initialState = {
    notes: [],
    isDisplayed: false
};

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_NOTE: {
            return {...state, notes: action.notes.filter((data, id) => id !== action.id)}
        }

        case NOTE_IS_DISPLAYED: {
            return {...state, isDisplayed: action.isDisplayed}
        }
        case SET_NOTES: {
            return  { ...state,
                notes: action.notes}

        }

        default:
            return state;

    }
}

export const getNotesToNC = () => {
    return async (dispatch) => {
        dispatch(noteIsDisplaying(false));
        let data = await notesAPI.getNotes()
       dispatch(setNotes(data));
        dispatch(noteIsDisplaying(true));
    }
}

export const deleteNote = (id) => ({type: DELETE_NOTE, id});
export const noteIsDisplaying = (isDisplayed) => ({type: NOTE_IS_DISPLAYED, isDisplayed})
export const setNotes = (notes) => ({type: SET_NOTES, notes })

export default noteReducer;


