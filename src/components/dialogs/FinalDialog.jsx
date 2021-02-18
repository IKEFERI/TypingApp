import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import {DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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


    const results = JSON.parse(localStorage.getItem("results"));
    const difficult = useSelector(state => state.appState.difficultyGame);

    const setResults = (accuracy, errors, speed, difficult) => {
        let newResults;
        const difficultToText = difficult === 1 ? 'Легкий' : difficult === 4 ? 'Нормальный' : 'Сложный';
        if (results) {
            newResults = [...results, {
                accuracy,
                errors,
                speed,
                difficult: difficultToText
            }];
        } else {
            newResults = [{
                accuracy,
                errors,
                speed,
                difficult: difficultToText
            }];
        }
        localStorage.setItem('results', JSON.stringify(newResults));
    }

    const setResultWithHandleClose = () => {
        setResults(accuracy, countErrors, finalSpeed, difficult);
        handleClose();
    }

    return (
        <Dialog onClose={setResultWithHandleClose} open={open}>
            <DialogTitle onClose={setResultWithHandleClose}>
                {resultTextOutput.title}
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom style={{fontSize: '18px'}}>
                    {resultTextOutput.text}
                </Typography>
            </DialogContent>
            <DialogContent dividers>
                <Typography gutterBottom style={{fontSize: '18px'}}>
                    Твоя скорость: {finalSpeed} знаков в минуту. <br/>
                    Точность твоих нажатий {accuracy}% <br/>
                    Всего ошибок: {countErrors}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={setResultWithHandleClose} color="primary">
                    {resultTextOutput.button}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FinalDialog;