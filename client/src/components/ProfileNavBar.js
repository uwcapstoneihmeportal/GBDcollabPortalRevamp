import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

import NavigationItem from '../components/NavigationItem'

const backgroundColor = "#26a146"

const NavBarStyle = {
    backgroundColor: backgroundColor,
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.24)',
    paddingTop: '10px'
}

const brandImage = require('../images/ihme_logo.png')

class ProfileNavBar extends Component {
    render() {
        const NavBrandHeight = '50px'

        return (
            <div>
                <Navbar style={NavBarStyle} expand="md">
                    <NavbarBrand href="/home">
                        <img src={brandImage} alt="IHME logo" style={{ height: NavBrandHeight }} />
                    </NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

export default ProfileNavBar