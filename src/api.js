import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {"Content-Type": "application/json"}
});


export const notesAPI = {
    getNotes() {
        return instance.get(`notes`)
            .then(response => {
                // return Object.keys(response.data)
                //     .map( key => {
                //         return {
                //           ...response.data[key]
                //         }})
                return response.data
                }
                )},

    postNote(noteText, id) {
    const note = {
        noteText,
        id
    }
        return instance.post(`notes`, note)
            .then(response => {
                // return Object.keys(response.data).map( key => {
                //     return {
                //         ...response.data[key],
                //     }})
                return [response.data]
            }
            );
    },

    deleteNote(id) {
        return instance.post(`notes/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

