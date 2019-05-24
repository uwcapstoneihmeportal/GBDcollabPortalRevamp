import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const NavBarStyle = {
    paddingTop: '10px',
    marginBottom: '0vh'
}

const BrandStyle = {
    height: '60px',
    paddingLeft: '10vh'
}

const brandImage = require('../images/ihme_logo.png')

class ProfileNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar style={NavBarStyle} expand="md">
                    {/* <NavbarBrand href="/home">
                        <img src={brandImage} alt="IHME logo" style={BrandStyle}  />
                    </NavbarBrand> */}
                </Navbar>
            </div>
        )
    }
}

export default withRouter(ProfileNavBar)