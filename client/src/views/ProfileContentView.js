import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Tab, Nav } from 'react-bootstrap'

import CardContainer from '../components/CardContainer'

const ContainerStyle = {
    marginLeft: '12vh',
    marginRight: '12vh',
    marginTop: '8vh',
    marginBottom: '8vh'
}

class ProfileContentView extends Component {
    render() {
        let items = [
            "Profile",
            "Affiliations",
            "Engagment Details",
            "Area of Expertise",
            "Authorship Information",
            "System Information"
        ]

        return (
            <div style={ContainerStyle}>
                <Tab.Container defaultActiveKey={items[0]}>
                    <Row>
                        <Col sm={4}>
                            <Nav variant="pills" className="flex-column">
                                {items.map(item =>
                                    <Nav.Item>
                                        <Nav.Link eventKey={item}>
                                            {item}
                                        </Nav.Link>
                                    </Nav.Item>
                                )}
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="Profile">
                                    <Row>
                                        <Col sm="2">
                                            <CardContainer title="prefix" text="dr." />
                                        </Col>
                                        <Col sm="5">
                                            <CardContainer title="first name" text="sam" />
                                        </Col>
                                        <Col sm="5">
                                            <CardContainer title="last name" text="johnson" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="6">
                                            <CardContainer title="gender" text="male" />
                                        </Col>
                                        <Col sm="6">
                                            <CardContainer title="age" text="55-64" />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>

        )
    }
}

export default ProfileContentView
