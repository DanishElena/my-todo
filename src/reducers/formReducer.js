const ADD_NOTE = 'ADD_NOTE';


let initialState = {
    notes: [],
    noteText: "",
};

const formForReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            let newNote = {
                id: 3,
                text: action.noteText,
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



export const addNote = (noteText) => ({type: ADD_NOTE, noteText});


export default formForReducer;


