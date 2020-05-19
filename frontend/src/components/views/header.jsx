import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Header.css';

class Header extends Component {
    render() {
        return ( 
            <div className="header">
                <NavLink exact to="/" className="item" activeClassName="active">home</NavLink>
                <NavLink to="/about/page" className="item" activeClassName="active">about</NavLink>
                <NavLink to="/trendywords" className="item" activeClassName="active">trendy words</NavLink>
                <NavLink to="/hardwords" className="item" activeClassName="active">difficult words</NavLink>
            </div>
        );
    }
}

export default Header;

