import Dialog from "@material-ui/core/Dialog";
import {Box, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import Image from "material-ui-image";
import instructionImg from "../../assets/handskeyword.png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";

const StartDialog = ({handleClose, open, classes}) => {
    return (
        <Dialog disableEscapeKeyDown open={open}>
            <DialogTitle onClose={handleClose}>
                Немного о положении рук
            </DialogTitle>
            <DialogContent dividers>
                <Box className={classes.image}>
                    <Image
                        src={instructionImg}
                        aspectRatio={(16 / 9)}
                    />
                </Box>
                <Typography gutterBottom style={{fontSize: '18px'}}>
                    Прежде чем начать, обрати внимание на картинку. Каждой зоне твоей клавиатуры, соответствуют пальцы
                    твоих рук. Нащупай указательными пальцами метки на кнопках клавиатуры - F и J. Так ты сможешь
                    в слепую выбирать правильное положение пальцев.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Поехали!
                </Button>
            </DialogActions>
        </Dialog>

    );
}
export default StartDialog;