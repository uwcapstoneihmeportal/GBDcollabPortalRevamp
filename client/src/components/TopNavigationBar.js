import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { FormGroup } from 'reactstrap'

import UserDropdown from '../components/UserDropdown'
import CustomInput from '../components/CustomInput'

const backgroundColor = "#cbe2a0"

const TopNavigationStyle = {
    backgroundColor: backgroundColor
}

class TopNavigationBar extends Component {
    render() {
        return (
            <div style={TopNavigationStyle}>
                <Container style={{ maxWidth: '100%', margin: '0', padding: '0' }}>
                    <Row>
                        <Col sm="3">
                            
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
                </Container>
            </div>
        )
    }
}

export default TopNavigationBar
