import {Box, Grid, Paper} from "@material-ui/core";
import FetchedText from "./FetchedText";
import Button from "@material-ui/core/Button";
import {resetGame} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    fetchTextContainer: {
        fontSize: '21px',
        lineHeight: '1.65',
        letterSpacing: '3px'
    },
    paper: {
        padding: '24px'
    },
    actionList: {
        textAlign: 'right',
        marginTop: '16px'
    }
});

const Text = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const isFetching = useSelector(state => state.appState.showLoader);
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Box className={classes.fetchTextContainer}>
                    <FetchedText style={{fontSize: '20px', lineHeight: '1.65'}}/>
                </Box>
                <div className={classes.actionList}>
                    <Button tabIndex="-1"
                            disabled={isFetching}
                            onClick={() => {
                                document.activeElement.blur();
                                dispatch(resetGame());
                            }}>Начать заново</Button>
                </div>
            </Paper>
        </Grid>
    );
}

export default Text;