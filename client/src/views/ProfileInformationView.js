import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap'
import CardContainer from '../components/CardContainer'

class ProfileInformationView extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="6">
                        <CardContainer title="Contact Details"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProfileInformationView
