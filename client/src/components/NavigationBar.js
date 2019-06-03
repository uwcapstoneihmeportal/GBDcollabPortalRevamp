import React, { Component } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Nav, FormGroup } from 'reactstrap'
import NavigationItem from '../components/NavigationItem'
import CustomInput from './CustomInput'
import UserDropdown from './UserDropdown'

// Style
const NavBarContainerStyle = {
    background: 'linear-gradient(#cbe2a0, #26a146)',
    padding: '0',
    margin: '0',
    maxWidth: '100%',
    fontFamily: 'verdana',
}

const LogoStyle = {
    marginTop: '4vh',
    marginLeft: '8vh',
    height: '10vh'
}

// Image
const brandImage = require('../images/ihme_logo.png')

// Component
class NavigationBar extends Component {
    render() {
        return (
            <Container style={NavBarContainerStyle}>
                <Row>
                    <Col sm="3">
                        <NavbarBrand href="/home">
                            <img src={brandImage} alt="IHME logo" style={LogoStyle} />
                        </NavbarBrand>
                    </Col>
                    <Col sm="6">
                        <FormGroup>
                            <CustomInput
                                labelText="Search"
                                imagePath={require("../images/search.png")}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <UserDropdown />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar style={{marginTop: '4vh'}} expand="md">
                            <Nav className="nav-fill w-100" navbar>
                                <NavigationItem label="Home" ref="/home"/>
                                <NavigationItem label="Research" ref="/home"/>
                                <NavigationItem label="News &amp; Events" ref="/home"/>
                                <NavigationItem label="Projects" ref="/home"/>
                                <NavigationItem label="Get Involved" ref="/home"/>
                                <NavigationItem label="About" ref="/home"/>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NavigationBar