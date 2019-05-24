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
    fontSize: '13pt'
}

const CardContainerStyle = {
    boxShadow: '3px 3px 3px 3px #c1c1c1'
}

class CardContainer extends Component {
    render() {
        const { title, data } = this.props

        const numDataPoints = data.length
        const slicePoint = data.length / 2

        // const slicePoint = numDataPoints % 2 == 0 ? numDataPoints / 2 : numDataPoints / 2 + 1

        const firstThreeTitleLetters = title.slice(0, 3)
        const restOfTitle = title.slice(3)

        const firstRow = data.slice(0, slicePoint)
        const secondRow = data.slice(slicePoint, data.length)

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
                                <Col sm={12 / slicePoint}>
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
                                <Col sm={12 / slicePoint}>
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
