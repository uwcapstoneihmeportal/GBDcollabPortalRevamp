import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';

const HeaderStyle = {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: '15pt'
}

const CardTitleStyle = {
    fontWeight: 'bold'


}

class CardContainer extends Component {
    render() {
        return (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Card>
                    <CardHeader style={HeaderStyle}>
                        {this.props.title}
                    </CardHeader>
                    <CardBody>
                        <CardTitle style={CardTitleStyle}>Name</CardTitle>
                        <CardText>
                            Sam Johnson
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardContainer
