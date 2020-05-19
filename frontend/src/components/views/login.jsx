import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Login extends Component {
    isLogin = false;
    addUser = () => {
        window.localStorage.removeItem("UserID");
        this.props.history.push('/add-user');
    }
    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>login</Typography>
                <form style={formContainer}>

                <TextField type="text" placeholder="please input your username" name="userName" 
                    fullWidth margin="normal" />

                <TextField type="password" placeholder="please input your password" name="password"
                    fullWidth margin="normal"/>
                </form>
                <Button color="inherit">Login</Button>
                <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
                {/* { !this.isLogin && <Redirect to="/login"/> } 로그인 되었습니다. */}
            </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}
export default Login;
