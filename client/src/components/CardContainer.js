import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const CardHeaderStyle = {
    color: '#696969'
}

const CardHeaderSpanStyle = {
    borderBottom: '2px solid #26a146',
}

const CardTitleStyle = {
    textTransform: 'uppercase',
    color: '#c1c1c1'
}

const CardTextStyle = {
    color: 'black',
    fontSize: '13pt',
}

const CardContainerStyle = {
    boxShadow: '3px 3px 3px 3px #c1c1c1'
}

class CardContainer extends Component {
    render() {
        const { title, data } = this.props

        const firstThreeTitleLetters = title.slice(0, 3)
        const restOfTitle = title.slice(3)

        const firstRow = data.slice(0, 2)
        const secondRow = data.slice(2, data.length)

        return (
            <Card style={CardContainerStyle}>
                <CardBody style={{ paddingLeft: '8vh' }}>                    
                    <h2 style={CardHeaderStyle}>
                        <span style={CardHeaderSpanStyle}>
                            {firstThreeTitleLetters}
                        </span>
                        {restOfTitle}
                    </h2>
                    <br/>
                    <Row>
                        {firstRow.map(item => {
                            return (
                                <Col sm="6">
                                    <CardTitle style={CardTitleStyle}>
                                        {item.title}
                                    </CardTitle>
                                    <CardText style={CardTextStyle}>
                                        {item.value}
                                    </CardText>
                                </Col>
                            )
                        })}
                    </Row>
                    <br/>
                    <Row>
                        {secondRow.map(item => {
                            return (
                                <Col sm="6">
                                    <CardTitle style={CardTitleStyle}>
                                        {item.title}
                                    </CardTitle>
                                    <CardText style={CardTextStyle}>
                                        {item.value}
                                    </CardText>
                                </Col>
                            )
                        })}
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default CardContainer
