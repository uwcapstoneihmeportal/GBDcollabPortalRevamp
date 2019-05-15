import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'
import { Tab } from 'react-bootstrap'

import CardContainer from '../components/CardContainer'

const ColumnStyle = {
    padding: '8vh'

}

class ProfileInformationView extends Component {
    render() {
        return (
            <Tab.Container defaultActiveKey="first" style={{ padding: '8vh' }}>
                <Row>
                    <Col sm="3" style={ColumnStyle}>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">
                                    Profile
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Another Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">Disabled Link</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm="9" style={ColumnStyle}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div>
                                    Test
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>
                                    Test 2
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}

export default ProfileInformationView
