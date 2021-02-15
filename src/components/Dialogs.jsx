import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {Box, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import instructionImg from '../assets/handskeyword.png';
import Image from "material-ui-image"
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    image: {
        marginBottom: '8px'
    }
});

export function StartDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle onClose={handleClose}>
                Привет!
            </DialogTitle>
            <DialogContent dividers>
                <Box className={classes.image}>
                    <Image
                        src={instructionImg}
                        aspectRatio={(16/9)}
                    />
                </Box>
                <Typography gutterBottom style={{textAlign: 'justify', fontSize: '18px'}}>
                    Прежде чем начать, обрати внимание на картинку. Каждой зоне твоей клавиатуры, соответствуют пальцы твоих рук. Нащупай указательными пальцами метки на кнопках клавиатуры - F и J. Так ты сможешь
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

export function FinalDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle onClose={handleClose}>
                Ура!
            </DialogTitle>
            <DialogContent dividers>
                <Box className={classes.image}>
                    <Image
                        src={instructionImg}
                        aspectRatio={(16/9)}
                    />
                </Box>
                <Typography gutterBottom style={{textAlign: 'justify', fontSize: '18px'}}>
                    Поздравляю! Ты "Отлично" справился
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