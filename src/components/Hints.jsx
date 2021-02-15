import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import CustomAlert from "./CustomAlert";

const Hints = () => {
    const showLoader = useSelector(state => state.appState.showLoader);
    const erroredChar = useSelector(state => state.appState.erroredChar);
    const passedChar = useSelector(state => state.appState.passedChar);
    const showAlert = useSelector(state => state.appState.showAlert);

    useEffect(()=>{},[showLoader,erroredChar,passedChar])

    if(showAlert){
        return <CustomAlert severity="error"
                            text="Не получилось загрузить текст. Убедитесь что интернет подключен и обновите страницу."/>
    }

    if(showLoader){
        return <CustomAlert severity="info"
                            text="Подождите, текст сейчас загрузится!"/>
    }

    if(erroredChar){
        return <CustomAlert severity="error"
                            text="Упс! Ошибочка. Постарайся печатать внимательнее."/>
    }

    if(passedChar){
        return <CustomAlert severity="success"
                            text="Молодец! Продолжай в том же духе!"/>
    }

    return <CustomAlert severity="warning"
                        text="Начните печатать, только не торопитесь. Старайтесь четко прожимать клавиши, не забудьте о правильном положении пальцев на клавиатуре. У вас все получится!"/>
};

export default Hints;