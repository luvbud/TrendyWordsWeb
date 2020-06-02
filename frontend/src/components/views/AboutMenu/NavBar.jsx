import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, Typography, IconButton }from '@material-ui/core'
import MenuIcon from '@material-ui/core/Menu'
import '../../../css/Header.css'

const NavBar = () => {
    return(
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" id="Title" style={style}>
                        Trendy Words
                    </Typography>
                    <NavLink to="/login" style={loginStyle} className="item">login</NavLink>
                </Toolbar>
            </AppBar>
    );
}

const loginStyle = {
    backgroundColor: '#3f51b5',
    color: 'white',
    fontFamily: 'Pacifico, cursive',
    fontSize: '20px',
    marginRight: '20px'
}

const style = {
    flexGrow: 1,
    marginTop: '20px',
    marginBottom: '20px'
}

export default NavBar;