import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {"Content-Type": "application/json"}
});


export const notesAPI = {
    getNotes() {
        return instance.get(`notes`)
            .then(response => {
                return response.data;
            });
    },

    postNote(noteText) {

    const note = {
        noteText,
        id: new Date().toJSON()
    }

        return instance.post(`notes`, note)
            .then(response => {
                return response.data;
            });
    },
}

