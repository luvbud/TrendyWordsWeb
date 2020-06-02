import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../../../css/login.css'

class Login extends Component {
    componentDidMount() {
        console.log("Login mount");
    }

    state = {
        userName: '',
        password: ''
    }

    handleChange = (e) => {
        let nextState = [];
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleRegister = () => {
        let id = this.state.userName;
        let pw = this.state.password;

        this.props.onRegister(id, pw).then(
            (result) => {
                if(!result){
                    this.setState(
                        {
                            userName: '',
                            password: ''
                        });
                }
            }
        );
    }

    isLogin = false;

    addUser = () => {
        window
            .localStorage
            .removeItem("UserID");
        this
            .props
            .history
            .push('/add-user');
    }

    render() {
        const inputLoginBox = (
                <div style={divStyle}>
                    <form style={formContainer}>
                        <TextField
                            type="text"
                            placeholder="please input your username"
                            name="userName"
                            style={widthOption}
                            margin="normal"/>

                        <TextField
                            type="password"
                            placeholder="please input your password"
                            name="password"
                            style={widthOption}
                            margin="normal"/>
                    </form>
                    <div style={buttonDiv}>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit" onClick={this.addUser}>
                            Add User
                        </Button>
                    </div>
                </div>
        );

        return (
            <div>
                <Typography variant="h4" style={style} id="login">login</Typography>
                {inputLoginBox}
            </div>
        );
    }
}

Login.propTypes = {
    mode: PropTypes.bool,
    onRegister: PropTypes.func
};

Login.defaultProps = {
    mode: true,
    onRegister: (id, pw) => {
        console.error("register function is not defined");
    }
};

const widthOption = {
    width: '400px',
    height: '50px',
};

const buttonDiv = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    marginTop: '15px',
    width: '100%'
}

const divStyle = {
    marginTop: '40px',
    marginLeft: '150px',
    marginRight: '150px',
    display: 'block',
    alignItems: 'center'
};

const formContainer = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
};

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px'
}

export default Login;
