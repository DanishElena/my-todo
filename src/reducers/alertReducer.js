const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';

let initialState = {
    visible: false,
    notes: []
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                ...action.notes,
                visible: true,
            }
            case HIDE_ALERT:
            return {
                ...state,
                visible: false,
            }
        default:
            return state;
    }
}

export const showAlertAction = (notes) => ({type: SHOW_ALERT, notes})
export const hideAlertAction = () => ({type: HIDE_ALERT})

export default alertReducer;