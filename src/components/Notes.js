import React from "react";
import axios from 'axios';

export const Notes = (props) => {
    // debugger;
    // const getNotes = () =>
    // {
    //
    //         axios.get("http://localhost:3000/notes")
    //             .then(response => {
    //                 props.setNotes(response.data.notes);
    //             });
    //
    // }


    // const notes = [{
    //     id: 1,
    //     text: "Текст заметки",
    //     date: new Date().toLocaleDateString()
    // },
    // {    id: 2,
    //     text: "Текст заметки2",
    //     date: new Date().toLocaleDateString()}
    // ]

    return (

        <div>

            <ul className="list-group">
                {props.notes.map(note => {
                    return (
                        <li className="list-group-item note">
                            <div>
                                <strong>{note.text}</strong>
                                <small>{new Date().toLocaleDateString()}</small>
                            </div>
                            <button type="button" className="btn btn-danger btn-sm">&times;</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
