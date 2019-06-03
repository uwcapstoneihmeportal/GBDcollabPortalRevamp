import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FormGroup, Button } from 'reactstrap';

// Styling
const ButtonStyle = {
    backgroundColor: '#26a146',
    borderRadius: '25px',
    margin: '0 auto',
    marginTop: '20px',
    width: '85%'
}

// Component
class AuthButton extends Component {
    render() {
        return (
            <FormGroup>
                <Button onClick={this.props.onClick} style={ButtonStyle} size="lg" block>
                    {this.props.labelText}
                </Button>
            </FormGroup>
        )
    }
}

// PropTypes
AuthButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default AuthButton
