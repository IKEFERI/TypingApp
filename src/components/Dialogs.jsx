import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {Box, DialogActions, DialogContent, DialogTitle, experimentalStyled} from "@material-ui/core";
import instructionImg from '../assets/handskeyword.png';
import Image from "material-ui-image"
import {makeStyles} from "@material-ui/styles";
import {useDispatch, useSelector} from "react-redux";
import {red, green, purple} from "@material-ui/core/colors";
import {resetGame, setDifficultyGame} from "../redux/actions";

const useStyles = makeStyles({
    image: {
        marginBottom: '8px'
    },
    margin: {
        margin: '8px'
    },
});


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
                Выберите сложность
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
                <Typography gutterBottom style={{textAlign: 'justify', fontSize: '18px'}}>
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

const KeyLayoutDialog = ({handleClose, open}) => {
    return (
        <Dialog disableEscapeKeyDown open={open}>
            <DialogTitle onClose={handleClose}>
                Смените раскладку
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom style={{textAlign: 'justify', fontSize: '18px'}}>
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

const FinalDialog = ({handleClose, open}) => {
    const countErrors = useSelector(state => state.appState.countErrors);
    const accuracy = useSelector(state => state.appState.accuracy);
    const speed = useSelector(state => state.appState.speed);
    const [finalSpeed, setFinalSpeed] = useState(speed);

    const resultTextAll = {
        awesome: {
            title: 'Отлично!',
            text: 'Ого, да ты настоящий профессионал! Только посмотри на свои результаты.',
            button: 'Повторить успех'
        },
        good: {
            title: 'Хорошо!',
            text: 'Ты молодец, у тебя хороший результат, тренируйся больше и станешь настоящим профессионалом!',
            button: 'Улучшить результат'
        },
        normal: {
            title: 'Нормально',
            text: 'Неплохо, но есть к чему стремится. Рекомендую тренироваться чаще.',
            button: 'Тренироваться снова'
        },
        bad: {
            title: 'Плохо!',
            text: 'Твой результат очень неочень. Но не отчаивайся, этот тренажер сделает из тебя настоящего профи! Продолжай тренироваться!',
            button: 'Не останавливаться'
        },
        slowly: {
            title: 'Слишком медленно!',
            text: 'Ты печатал слишком медленно. Нужно набирать темп. Сделай еще несколько попыток, не торопись, но и не медли.',
            button: 'Ускориться!'
        }
    }

    const [resultTextOutput, setResultTextOutput] = useState(resultTextAll.awesome);


    useEffect(() => {
            setResultTextOutput(resultTextAll.awesome);

            if (accuracy < 95) {
                setResultTextOutput(resultTextAll.good);
            }
            if (accuracy < 90) {
                setResultTextOutput(resultTextAll.normal);
            }
            if (accuracy < 85) {
                setResultTextOutput(resultTextAll.bad);
            }
        },
        [accuracy]);

    useEffect(() => {
        setFinalSpeed(speed);
        if (speed < 90) {
            setResultTextOutput(resultTextAll.slowly);
        }
    }, [open]);


    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle onClose={handleClose}>
                {resultTextOutput.title}
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom style={{textAlign: 'justify', fontSize: '18px'}}>
                    {resultTextOutput.text}
                </Typography>
            </DialogContent>
            <DialogContent dividers>
                <Typography gutterBottom style={{textAlign: 'justify', fontSize: '18px'}}>
                    Твоя скорость: {finalSpeed} знаков в минуту. <br/>
                    Точность твоих нажатий {accuracy}% <br/>
                    Всего ошибок: {countErrors}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    {resultTextOutput.button}
                </Button>
            </DialogActions>
        </Dialog>
    );
}


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


    useEffect(() => {
        if (currentChar === allChars && allChars !== 0) {
            toggleModal('finalDialog');
        }
    }, [currentChar]);

    useEffect(() => {
        if (!layoutKeyCheck) {
            toggleModal('keyLayoutDialog');
        }
    }, [layoutKeyCheck])

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
                toggleModal('difficultDialog');
                toggleModal('finalDialog');
            }} open={open.finalDialog} classes={classes}/>
        </>
    );
}

export default Dialogs;