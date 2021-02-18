import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    paper: {
        padding: '24px'
    },
    h1: {
        fontSize: '36px'
    }
});

const Title = ({text})=>{
    const classes = useStyles();
    return (
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h1" className={classes.h1}>
                        {text}
                    </Typography>
                </Paper>
            </Grid>
        )

}
export default Title;

