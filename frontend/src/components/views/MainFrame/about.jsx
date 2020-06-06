import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";

class About extends Component {
    go = () => {
        this.props.history.go();
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <Typography variant="h4" style={headCss}>{this.props.match.params.username}
                의 소개</Typography>
        );
    }
}

const headCss = {
    fontFamily: 'Pacifico, cursive',
    fontSize: '34px',
    marginTop: '80px',
    marginBottom: '20px',
    justifyContent: 'center',
    display: 'flex'
};

export default About;
