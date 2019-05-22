import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

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
    textTransform: 'capitalize'
}

const CardContainerStyle = {
    boxShadow: '3px 3px 3px 3px #c1c1c1'
}

class CardContainer extends Component {
    render() {
        // const info = this.props.info
        const info = {
            cardTitle: 'Basic Information',
            data: [
                {
                    title: 'Name',
                    text: 'Dr. Sam Johnson'
                },
                {
                    title: 'Gender',
                    text: 'Male'
                },
                {
                    title: 'Age',
                    text: '55-64'
                },
                {
                    title: 'Language(s)',
                    text: 'Spanish - Hindi - Korean'
                },
            ]
        }

        const firstThreeTitleLetters = info.cardTitle.slice(0, 3)
        const restOfTitle = info.cardTitle.slice(3)

        const firstRow = info.data.slice(0, 2)
        const secondRow = info.data.slice(2, info.data.length)

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
                                        {item.text}
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
                                        {item.text}
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
