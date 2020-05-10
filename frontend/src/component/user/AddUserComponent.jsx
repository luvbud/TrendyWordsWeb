import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class AddUserComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            userid: '',
            pw: ''
            // userName: '',
            // password: '',
            // firstName: '',
            // lastName: '',
            // age: '',
            // salary: '',
            // message: null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            salary: this.state.salary,
        }

        ApiService.addUser(user)
        .then( res => {
            this.setState({
                message: user.userName + '님이 성공적으로 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/users');
        })
        .catch( err =>{
            console.log('saveUser() error', err)
        });
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                        <TextField type="text" placeholder="please input your name" name="name" 
                         fullWidth margin="normal" value={this.state.userName} onChange={this.onChange} />

                        <TextField type="text" placeholder="please input your email" name="email"
                         fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />

                        <TextField type="text" placeholder="please input your id" name="userid"
                         fullWidth margin="normal" value={this.state.firstName} onChange={this.onChange} />

                        <TextField type="password" placeholder="please input your password" name="pw"
                         fullWidth margin="normal" value={this.state.lastName} onChange={this.onChange} />
                
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        )
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

export default AddUserComponent;