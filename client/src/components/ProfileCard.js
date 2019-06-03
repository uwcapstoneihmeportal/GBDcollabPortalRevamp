import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

// Styling
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

const CardStyle = {
    boxShadow: '3px 3px 3px 3px #c1c1c1'
}

// Images
let editButtonImage = require('../images/edit.png')

// Component
class ProfileCard extends Component {
    handleEditPressed() {
        const { title, data } = this.props
        this.props.onEditClicked(title, data)
    }

    render() {
        const { title, data, onEditClicked } = this.props

        // Used to underline first three letters of Profile card titles
        const firstThreeTitleLetters = title.slice(0, 3)
        const restOfTitle = title.slice(3)

        // Splits given data into two rows, with more data in first row if data.length is odd.
        // Handles even and odd amounts of data. Recommend no more than 6 objects for asthetic purposes
        const numDataPoints = data.length
        const slicePoint = numDataPoints % 2 === 0 ? numDataPoints / 2 : Math.floor(numDataPoints / 2 + 1)
        const columnSize = slicePoint < 2 ? 6 : 12 /slicePoint

        const firstRow = numDataPoints > 2 ? data.slice(0, slicePoint) : data
        const secondRow = numDataPoints > 2 ? data.slice(slicePoint, data.length) : []

        // Includes an edit button in the top right if prop onEditClicked is provided
        const editButton = onEditClicked ? (
            <Col sm="1">
                <img 
                    src={editButtonImage} 
                    alt=""
                    style={EditStyle}
                    onClick={this.handleEditPressed.bind(this)}
                />
            </Col>
        ) : null

        const headerColumnSize = editButton ? "11" : "12"

        return (
            <Card style={CardStyle}>
                <CardBody style={{ paddingLeft: '8vh' }}>
                    <Row>
                        <Col sm={headerColumnSize}>
                            <h2 style={CardHeaderStyle}>
                                <span style={CardHeaderSpanStyle}>
                                    {firstThreeTitleLetters}
                                </span>
                                {restOfTitle}
                            </h2>
                        </Col>
                        {editButton ? editButton : ''}
                    </Row>
                    <br />
                    <Row>
                        {firstRow.map(item => {
                            var val = item.value

                            // if the value is provided in array format, items will display in
                            // bulletted list, one item per row
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

                            // if the value is provided in array format, items will display in
                            // bulletted list, one item per row
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

// PropTypes
ProfileCard.propTypes = {
    title: PropTypes.string.isRequired, 
    data: PropTypes.arrayOf(PropTypes.object),
    onEditClicked: PropTypes.func // optional. If not provided, edit icon does not appear in card
}

export default ProfileCard
