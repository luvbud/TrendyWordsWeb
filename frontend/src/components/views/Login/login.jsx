import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import '../../../css/login.css'

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    componentDidMount() {
        console.log("Login mount");
    }

    handleChange = (e) => {
        let nextState = [];
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    loginClicked = () => {
        
    }

    addUser = () => {
        this.props.history.push('/add-user');
    }

    render() {
        const successMessage = (
            <p> ID와 비밀번호를 입력하세요. </p>
        );

        const inputLoginBox = (
                <div style={divStyle}>
                    {successMessage}
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
                        <Button color="inherit" onClick={this.loginClicked}>Login</Button>
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
    alignItems: 'center',
    textAlign: 'center'
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
