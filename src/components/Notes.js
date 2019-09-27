import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const Notes =  React.memo((props) => (

            <TransitionGroup component="ul" className="list-group">
                {props.notes.map((note, i )=> (
                    <CSSTransition
                        key={i}
                        classNames='note'
                        timeout={800}>
                        <li className="list-group-item note" key={note.id}>

                            <div>
                                <strong>{`${i+1})`}</strong>&nbsp;
                                {/*<small>{note.id}</small>&nbsp;*/}
                                <strong>{note.noteText}</strong>
                            </div>
                            <button type="button" className="btn btn-danger btn-sm" onClick={ () => props.deleteNoteFromNC(note)}>&times;</button>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
))