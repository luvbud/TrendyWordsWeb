import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
import {links} from '../../link';
import '../../../css/login.css'
import { red } from '@material-ui/core/colors';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            username: '',
            password: '',
            email: '',
            message: ''
        }

        this.saveUser = this.saveUser.bind(this);
        this.isDuplicate = this.isDuplicate.bind(this);
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

    isDuplicate = (e) => {
        e.preventDefault();

        let id = this.state.nickname;

        if(id != ''){
            axios.post(links.serverLink + 'users/' + id)
            .then(res => {
                if(!res.data){
                    this.setState({
                        message: id + '는 사용할 수 없습니다.'
                    })
                }else{
                    this.setState({
                        message: id + '는 사용 가능합니다.'
                    })
                }
            })
            .catch(err => {
                }
            );
        }else{
            this.setState({
                message: 'id를 입력하세요.'
            })
        }
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            'nickname': this.state.nickname,
            'username': this.state.username,
            'password': this.state.password,
            'email': this.state.email
        }

        if(user.nickname === '' || user.username === '' || user.password === '' || user.email === ''){
            for(let key in user){
                if(user[key] === ''){
                    this.setState({
                        message: key + '를 입력하세요.'
                    })
                    break;
                }
            }
        }else{
            axios.post(links.serverLink + 'users', user)
            .then(res => {
                
            })
            .catch(err => {
                    console.log('Database Save Error', err);
                }
            );
        }
    }

    render() {

        const showMessage = (
            <p style={{color:'red'}}>{this.state.message}</p>
        );

        return (
            <div>
                <Typography variant="h4" id="login" style={style}>Add User</Typography>
                <div style={divStyle}>
                    {showMessage}
                    <form style={formContainer}>
                        <TextField style={widthOption} type="text" placeholder="please input your id"
                                   name="nickname"
                                   fullWidth margin="normal" value={this.state.nickname} onChange={this.onChange}/>
                        <Button color="inherit" onClick={this.isDuplicate}>Confirm</Button>
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
    display: 'block',
    alignItems: 'center',
    textAlign: 'center'
};

const formContainer = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px'
}

export default AddUser;