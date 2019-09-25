import React from "react";

export const Notes = (props) => {
    debugger;
    return (
        <div>
            <ul className="list-group">
                {props.notes.map(note => {
                    return (
                        <li className="list-group-item note" key={note.id}>
                            <div>
                                <strong>{note.noteText}</strong>
                                <small>{note.id}</small>
                            </div>
                            <button type="button" className="btn btn-danger btn-sm">&times;</button>

                        </li>)
                })}
            </ul>
        </div>
    )
}

//         <div>
//
//         <ul className="list-group">
//         {Object.keys(props.notes).map( key => {
//                 return (
//                     <li className="list-group-item note" key={props.notes.id[key]}>
//                         <div>
//                             <strong>{props.notes.noteText[key]}</strong>
//                             <small>{props.notes.id[key]}</small>
//                         </div>
//                         <button type="button" className="btn btn-danger btn-sm">&times;</button>
//                     </li>
//                 )
//             })}
// </ul>
// </div>*/

