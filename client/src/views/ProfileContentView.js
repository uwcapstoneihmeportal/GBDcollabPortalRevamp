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
                        <Col sm={3}>
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
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="Profile">
                                    {/* Map over some data and create a row and column for each card */}
                                    
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
