import {Box, DialogContent, DialogTitle, experimentalStyled} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {green, purple, red} from "@material-ui/core/colors";
import {useDispatch} from "react-redux";
import {setDifficultyGame} from "../../redux/actions";
import Dialog from "@material-ui/core/Dialog";
import React from "react";

const GreenButton = experimentalStyled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(green[800]),
    backgroundColor: green[800],
    '&:hover': {
        backgroundColor: green[900],
    },
}));

const PurpleButton = experimentalStyled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const RedButton = experimentalStyled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
        backgroundColor: red[700],
    },
}));


const DifficultDialog = ({handleClose, open, classes}) => {
    const dispatch = useDispatch();

    const setEasyDifficult = () => {
        dispatch(setDifficultyGame(1));
        handleClose();
    }
    const setNormalDifficult = () => {
        dispatch(setDifficultyGame(4));
        handleClose();
    }
    const setHardDifficult = () => {
        dispatch(setDifficultyGame(8));
        handleClose();
    }

    return (
        <Dialog disableEscapeKeyDown open={open}>
            <DialogTitle>
                Выбери уровень сложности
            </DialogTitle>
            <DialogContent dividers>
                <Box className={classes.image}>
                    <GreenButton onClick={setEasyDifficult} variant="contained" className={classes.margin}>
                        Easy
                    </GreenButton>
                    <PurpleButton onClick={setNormalDifficult} variant="contained" className={classes.margin}>
                        Normal
                    </PurpleButton>
                    <RedButton onClick={setHardDifficult} variant="contained" className={classes.margin}>
                        Hard
                    </RedButton>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default DifficultDialog;