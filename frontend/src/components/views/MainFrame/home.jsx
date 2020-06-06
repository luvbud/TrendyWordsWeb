import React, {Component} from 'react';
import '../../../css/Page.css';
import Typography from "@material-ui/core/Typography";

class Home extends Component {
    go = () => {
        this.props.history.go();
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <Typography variant="h4" style={headCss} >Home</Typography>
                <p>메인페이지 삽입</p>
            </div>
        );
    }
}

const headCss = {
    fontFamily: 'Pacifico, cursive',
    fontSize: '30px',
    marginTop: '80px',
    marginBottom: '20px',
    justifyContent: 'center',
    display: 'flex'
}

export default Home;
