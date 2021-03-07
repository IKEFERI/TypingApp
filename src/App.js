import { Box, Container, Grid, StyledEngineProvider } from "@material-ui/core";
import Accuracy from "./components/Accuracy";
import Speedometer from "./components/Speedometer";
import { makeStyles } from "@material-ui/styles";
import Dialogs from "./components/Dialogs";
import ResultsTable from "./components/ResultsTable";
import Text from "./components/Text";
import HintsContainer from "./components/Hints";
import Title from "./components/Title";
import WrapperWithInput from "./components/wrapperWithInput";

function App() {
    const classes = useStyles();
    return (
        <StyledEngineProvider injectFirst>
            <WrapperWithInput>
                <Container maxWidth="md" className={classes.padding}>
                    <Grid container spacing={4}>

                        <Title text="Тренажер слепой печати" />
                        <HintsContainer />
                        <Text />
                        <Accuracy />
                        <Speedometer />
                        <ResultsTable />

                    </Grid>
                </Container>

                <Dialogs />
            </WrapperWithInput>
        </StyledEngineProvider>
    );
}

const useStyles = makeStyles({
    padding: {
        padding: '40px 15px'
    }
});

export default App;
