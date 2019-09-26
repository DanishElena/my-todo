const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';

let initialState = {
    visible: false,
     text: "",
    kind: ""

};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
               kind: action.kind,
                text: action.text,
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

export const showAlertAction = (text, kind, visible) => ({type: SHOW_ALERT, text, kind, visible})
export const hideAlertAction = (visible) => ({type: HIDE_ALERT, visible})

export default alertReducer;