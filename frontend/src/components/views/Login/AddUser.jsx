import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
import {links} from '../../link';
import '../../../css/login.css'

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            message: null
        }
    }

    go = () => {
        this.props.history.go(1);
    }

    goBack = () => {
        this.props.history.goBack();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }

        axios.post(links.serverLink + 'users', user)
            .then(res => {
                this.setState({
                        message: user.username + '님이 성공적으로 등록되었습니다.'
                    }
                )
                console.log(this.state.message);
                this.props.history.push('/users');
            })
            .catch(err => {
                    console.log(links.serverLink + '/uses');
                    console.log('save error', err);
                }
            );
    }

    go = () => {
        this.props.history.go(1);
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <Typography variant="h4" id="login" style={style}>Add User</Typography>
                <div style={divStyle}>
                    <form style={formContainer}>
                        <TextField style={widthOption} type="text" placeholder="please input your username"
                                   name="username"
                                   fullWidth margin="normal" value={this.state.username} onChange={this.onChange}/>

                        <TextField style={widthOption} type="password" placeholder="please input your password"
                                   name="password"
                                   fullWidth margin="normal" value={this.state.password} onChange={this.onChange}/>

                        <TextField style={widthOption} placeholder="please input your e-mail" name="email"
                                   fullWidth margin="normal" value={this.state.email} onChange={this.onChange}/>
                    </form>
                    <div style={buttonDiv}>
                        <Button color="inherit" onClick={this.goBack}>Go Back</Button>
                        <Button color="inherit" onClick={this.saveUser}>Save</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const buttonDiv = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    marginTop: '15px',
    width: '100%'
}

const widthOption = {
    width: '400px',
    height: '50px',
};

const divStyle = {
    marginTop: '40px',
    marginLeft: '150px',
    marginRight: '150px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
};

const formContainer = {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px'
}

export default AddUser;