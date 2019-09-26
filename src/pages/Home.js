import React, {Fragment} from "react";
import NotesContainer from "../components/NotesContainer";
import {AlertContainer} from "../components/AlertContainer";
import FormContainer from "../components/FormContainer";



export const Home = () => {
    return (
        <Fragment>
            <AlertContainer/>
            <FormContainer/>
            <NotesContainer/>
        </Fragment>
    )
}