import {Paper, Typography} from "@material-ui/core";
import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        passedChar: state.appState.passedChar
    };
}

class SpeedometerClass extends Component {
    constructor(props) {
        super(props);
        this.startTime = (new Date).getTime();
        this.numSec = 1;
        this.interval = null;
        this.state = {
            speed: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const updatedTime = ((new Date).getTime() - this.startTime) / 1000;
            const speedCalc = Math.round(this.props.passedChar / updatedTime * 60);
            this.setState({speed: speedCalc});
        }, this.numSec * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Paper style={{padding: "24px", marginBottom: "36px"}}>
                <Typography style={{fontSize: '24px', fontWeight: 600}}>
                    {this.state.speed} char/min
                </Typography>
            </Paper>
        );
    }
}

export default connect(
    mapStateToProps
)(SpeedometerClass);