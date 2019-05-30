import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

let editButtonImage = require('../images/edit.png')
const EditStyle = {
    width: '90%',
    cursor: 'pointer'
}


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
        const slicePoint = numDataPoints % 2 == 0 ? numDataPoints / 2 : Math.floor(numDataPoints / 2 + 1)
        const columnSize = slicePoint < 2 ? 6 : 12 /slicePoint
    
        const firstThreeTitleLetters = title.slice(0, 3)
        const restOfTitle = title.slice(3)

        const firstRow = numDataPoints > 2 ? data.slice(0, slicePoint) : data
        const secondRow = numDataPoints > 2 ? data.slice(slicePoint, data.length) : []

        return (
            <Card style={CardContainerStyle}>
                <CardBody style={{ paddingLeft: '8vh' }}>
                    <Row>
                        <Col sm="11">
                            <h2 style={CardHeaderStyle}>
                                <span style={CardHeaderSpanStyle}>
                                    {firstThreeTitleLetters}
                                </span>
                                {restOfTitle}
                            </h2>
                        </Col>
                        <Col sm="1">
                            <img 
                                src={editButtonImage} 
                                alt=""
                                style={EditStyle}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        {firstRow.map(item => {
                            var val = item.value

                            if (Array.isArray(val)) {
                                val = (<ul>
                                    {item.value.map(e => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>)
                            }

                            return (
                                <Col sm={columnSize}>
                                    <CardTitle style={CardTitleStyle}>
                                        {item.title}
                                    </CardTitle>
                                    <CardText style={CardTextStyle}>
                                        {val}
                                    </CardText>
                                </Col>
                            )
                        })}
                    </Row>
                    <br />
                    <Row>
                        {secondRow.map(item => {
                            var val = item.value

                            if (Array.isArray(val)) {
                                val = (<ul>
                                    {item.value.map(e => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>)
                            }

                            return (
                                <Col sm={columnSize}>
                                    <CardTitle style={CardTitleStyle}>
                                        {item.title}
                                    </CardTitle>
                                    <CardText style={CardTextStyle}>
                                        {val}
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
