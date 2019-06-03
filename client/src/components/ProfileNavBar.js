import React, { Component } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap'
import { withRouter } from 'react-router-dom'

const NavBarStyle = {
    paddingTop: '10px',
    marginBottom: '0vh'
}

const BrandStyle = {
    height: '60px',
    marginTop: '2vh',
}

const brandImage = require('../images/ihme_logo.png')

class ProfileNavBar extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="3">
                        <NavbarBrand href="/home">
                            <img
                                src={brandImage}
                                alt="IHME logo"
                                style={BrandStyle}
                            />
                        </NavbarBrand>
                    </Col>

                    <Col sm="6">
                    </Col>

                    <Col sm="3">
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(ProfileNavBar)