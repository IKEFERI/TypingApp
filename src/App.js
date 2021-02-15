import {Box, Container, Grid, Paper, Typography} from "@material-ui/core";
import CustomAlert from "./components/CustomAlert";
import Text from "./components/Text";
import Accuracy from "./components/Accuracy";
import SpeedometerClass from "./components/SpeedometerClass";
import Speedometer from "./components/Speedometer";


function App() {
    return (
        <div className="App">
            <Container maxWidth="md">
                <Paper style={{height: '600px', marginTop: '100px', padding: '16px'}}>
                    <Typography variant="h1" style={{fontSize: '36px', marginBottom: '16px'}}>
                        Тренажер слепой печати
                    </Typography>
                    <CustomAlert severity="warning" text="Good bye world" style={{marginBottom: '16px'}}/>
                    <Box style={{fontSize: "20px", lineHeight: '1.65'}}>
                        <Text/>
                    </Box>
                    <Grid>
                        <Box>
                            <Accuracy/>
                        </Box>
                        <Box>
                            <SpeedometerClass/>
                        </Box>
                        <Box>
                            <Speedometer/>
                        </Box>
                    </Grid>

                </Paper>
            </Container>
        </div>
    );
}

export default App;
