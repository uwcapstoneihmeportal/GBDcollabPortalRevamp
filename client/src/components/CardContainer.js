import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';


const CardTitleStyle = {
    textTransform: 'uppercase',
    color: '#c1c1c1'
}

const CardTextStyle = {
    color: 'black',
    textTransform: 'capitalize'
}

class CardContainer extends Component {
    render() {
        return (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Card>
                    <CardBody>
                        <CardTitle style={CardTitleStyle}>
                            {this.props.title}
                        </CardTitle>
                        <CardText style={CardTextStyle}>
                            {this.props.text}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardContainer
