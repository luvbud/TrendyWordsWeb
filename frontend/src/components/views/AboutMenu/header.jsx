import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../css/Header.css';
import Nav from "react-bootstrap/lib/Nav";

class Header extends Component {
    render() {
        return (
            <Nav>
                <div className="header">
                    <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
                    <NavLink to="/trendywords" className="item" activeClassName="active">Trendy words</NavLink>
                    <NavLink to="/hardwords" className="item" activeClassName="active">Difficult words</NavLink>
                    <NavLink to="/about/page" className="item" activeClassName="active">My page</NavLink>
                </div>
            </Nav>
        );
    }
}

export default Header;

