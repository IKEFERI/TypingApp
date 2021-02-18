import Dialog from "@material-ui/core/Dialog";
import {DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";

const KeyLayoutDialog = ({handleClose, open}) => {
    return (
        <Dialog disableEscapeKeyDown open={open}>
            <DialogTitle onClose={handleClose}>
                Смените раскладку
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom style={{fontSize: '18px'}}>
                    Обнаружена неправильная раскладка клавиатуры. Пожалуйста, переключитесь на латинскую раскладку
                    клавиатуры.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Ok!
                </Button>
            </DialogActions>
        </Dialog>

    );
}

export default KeyLayoutDialog;