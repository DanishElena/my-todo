import {notesAPI} from "../api";
import {getNotesToNC, setNotes} from "./notesReducer";
import {showAlert, showAlertAction} from "./alertReducer";


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
        dispatch(getNotesToNC());
        dispatch(addNote(noteText, id))
        dispatch(getNotesToNC())
        let data = await notesAPI.postNote(noteText, id)
        dispatch(showAlertAction("Заметка создана", 'success'))
        dispatch(setNotes(data))

    }
}


//if(value.trim()) {
//         firebase.addNote(value.trim()).then( ()=> {
//             alert.show("Заметка была создана", 'success')
//         }).catch(()=> {
//             alert.show("Что-то пошло не так", 'danger')
//         })
//         setValue("")
//     } else {
//         alert.show("Введите название заметки")
//     }
// }

export const addNote = (noteText, id) => ({type: ADD_NOTE, noteText, id});


export default formForReducer;


