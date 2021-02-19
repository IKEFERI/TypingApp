import {Box, Container, Grid, StyledEngineProvider} from "@material-ui/core";
import Accuracy from "./components/Accuracy";
import Speedometer from "./components/Speedometer";
import {makeStyles} from "@material-ui/styles";
import Dialogs from "./components/Dialogs";
import ResultsTable from "./components/ResultsTable";
import Text from "./components/Text";
import HintsContainer from "./components/Hints";
import Title from "./components/Title";
import {useEffect, useRef} from "react";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f1f1f1',
        minHeight: '100vh'
    },
    padding: {
        padding: '40px 15px'
    }
});

function App() {
    const classes = useStyles();
    const input = useRef(null);

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <div className={classes.root} onClick={() => input.current.focus()}>
                <Box style={{position: 'absolute', left: '-200%'}}>
                    <input type="text" ref={input}/>
                </Box>
                <Container maxWidth="md" className={classes.padding}>
                    <Grid container spacing={4}>

                        <Title text="Тренажер слепой печати"/>
                        <HintsContainer/>
                        <Text/>
                        <Accuracy/>
                        <Speedometer/>
                        <ResultsTable/>

                    </Grid>
                </Container>

                <Dialogs/>

            </div>
        </StyledEngineProvider>
    );
}

export default App;
