import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'


const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={style}>
                        Trendy Words
                    </Typography>
                    <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

const style = {
    flexGrow: 1
}

export default NavBar;