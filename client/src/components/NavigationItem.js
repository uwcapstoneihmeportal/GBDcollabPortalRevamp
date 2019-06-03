import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavItem, NavLink, } from 'reactstrap' 

// Styling
import '../styles/navbar.css'

const NavLinkStyle = {
    fontSize: '14pt'
}

// Component
class NavigationItem extends Component {
    render() {
        return (
            <NavItem>
                <NavLink style={NavLinkStyle} href={this.props.route}>             
                    {this.props.label}
                </NavLink>
            </NavItem>
        )
    }
}

// PropType
NavigationItem.propTypes = {
    label: PropTypes.string,
    route: PropTypes.string // route to new subdomain (i.e. /home)
}

export default NavigationItem
