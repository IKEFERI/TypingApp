import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {resetGame} from "../redux/actions";
import StartDialog from "./dialogs/StartDialog";
import DifficultDialog from "./dialogs/DifficultDialog";
import KeyLayoutDialog from "./dialogs/KeyLayoutDialog";
import FinalDialog from "./dialogs/FinalDialog";

const useStyles = makeStyles({
    image: {
        marginBottom: '8px'
    },
    margin: {
        margin: '8px'
    },
});

const Dialogs = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = useState({
        startDialog: true,
        difficultDialog: false,
        finalDialog: false,
        keyLayoutDialog: false
    });

    const toggleModal = (modal) => {
        setOpen(prev => ({
            ...prev,
            [modal]: !prev[modal]
        }));
    };

    const currentChar = useSelector(state => state.appState.currentChar);
    const allChars = useSelector(state => state.appState.allChars);
    const layoutKeyCheck = useSelector(state => state.appState.layoutKeyCheck);
    const reset = useSelector(state => state.appState.reset);


    useEffect(() => {
        if (currentChar === allChars && allChars !== 0) {
            toggleModal('finalDialog');
        }
    }, [currentChar]);

    useEffect(() => {
        if (reset) {
            toggleModal('difficultDialog');
        }
    }, [reset]);

    useEffect(() => {
        if (!layoutKeyCheck) {
            toggleModal('keyLayoutDialog');
        }
    }, [layoutKeyCheck]);

    return (
        <>
            <StartDialog handleClose={() => {
                toggleModal('startDialog');
                toggleModal('difficultDialog');
            }} open={open.startDialog} classes={classes}/>

            <DifficultDialog handleClose={() => {
                toggleModal('difficultDialog');
            }} open={open.difficultDialog} classes={classes}/>

            <KeyLayoutDialog handleClose={() => {
                toggleModal('keyLayoutDialog');
            }} open={open.keyLayoutDialog} classes={classes}/>

            <FinalDialog handleClose={() => {
                dispatch(resetGame());
                toggleModal('finalDialog');
            }} open={open.finalDialog} classes={classes}/>
        </>
    );
}

export default Dialogs;