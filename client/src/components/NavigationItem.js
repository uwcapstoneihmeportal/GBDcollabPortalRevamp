import React, { Component } from 'react';
import { NavItem, NavLink, } from 'reactstrap' 

const NavLinkStyle = {
    color: 'black',
    fontSize: '16px'
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
