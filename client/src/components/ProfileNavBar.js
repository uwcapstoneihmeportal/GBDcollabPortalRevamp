import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import NavigationItem from '../components/NavigationItem'

const NavBarStyle = {
    paddingTop: '10px',
    marginBottom: '4vh'
}

const BrandStyle = {
    height: '60px',
    paddingLeft: '8vh'
}

const brandImage = require('../images/ihme_logo.png')

class ProfileNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar style={NavBarStyle} expand="md">
                    <NavbarBrand href="/home">
                        <img src={brandImage} alt="IHME logo" style={BrandStyle} />
                    </NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

export default ProfileNavBar