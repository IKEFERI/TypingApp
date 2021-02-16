import {Box, Container, Grid, Paper, StyledEngineProvider, Typography} from "@material-ui/core";
import FetchedText from "./components/FetchedText";
import Accuracy from "./components/Accuracy";
import Speedometer from "./components/Speedometer";
import {makeStyles} from "@material-ui/styles";
import Hints from "./components/Hints";
import Dialogs from "./components/Dialogs";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f1f1f1',
        minHeight: '100vh'
    },
    fetchTextContainer: {
        fontSize: '21px',
        lineHeight: '1.65',
        letterSpacing: '3px'
    },
    paper: {
        padding: '24px'
    }
});

function App() {
    const classes = useStyles();

    return (
        <StyledEngineProvider injectFirst>
            <div className={classes.root}>
                <Container maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} style={{marginTop: '100px'}}>
                            <Paper className={classes.paper}>
                                <Typography variant="h1" style={{fontSize: '36px'}}>
                                    Тренажер слепой печати
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Hints/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Box className={classes.fetchTextContainer}>
                                    <FetchedText style={{fontSize: "20px", lineHeight: '1.65'}}/>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Accuracy/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Speedometer/>
                        </Grid>
                    </Grid>
                </Container>
                <Dialogs/>
            </div>
        </StyledEngineProvider>
    );
}

export default App;
