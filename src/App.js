import {Box, Container, Paper, Typography} from "@material-ui/core";
import CustomAlert from "./components/CustomAlert";
import Text from "./components/Text";
import Accuracy from "./components/Accuracy";


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
                    <Box>
                        Accuracy
                        <Accuracy/>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}

export default App;
