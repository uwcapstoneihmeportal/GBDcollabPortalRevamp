import React, { Component } from 'react';
import { NavItem, NavLink, } from 'reactstrap' 
import '../styles/navbar.css'

const NavLinkStyle = {
    fontSize: '14pt'
}

class NavigationItem extends Component {
    render() {
        return (
            <NavItem>
                <NavLink style={NavLinkStyle} href="/home">             
                    {this.props.label}
                </NavLink>
            </NavItem>
        )
    }
}

export default NavigationItem
