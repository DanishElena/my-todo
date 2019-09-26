import React from "react";

export const Notes = React.memo((props) => {



    return (
        <div>
            <ul className="list-group">
                {props.notes.map((note, i) => {
                    return (
                        <li className="list-group-item note" key={note.id}>
                            <div>
                                <strong>{`${i+1})`}</strong>&nbsp;
                                {/*<small>{note.id}</small>&nbsp;*/}
                                <strong>{note.noteText}</strong>
                            </div>
                            <button type="button" className="btn btn-danger btn-sm" onClick={ () => props.deleteNoteFromNC(note)}>&times;</button>

                        </li>)
                })}
            </ul>
        </div>
    )
})

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

