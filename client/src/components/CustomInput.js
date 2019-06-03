import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FormGroup, FormFeedback, Input } from 'reactstrap';

// Styling
const InputStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '30px',
    backgroundPosition: '2%',
    border: '1px solid #cbe2a0',
    boxShadow: '0 0 5px #26a146',
    borderRadius: '25px',
    height: '50px',
    margin: '0 auto',
    paddingLeft: '50px',
    width: '85%'
}

const FormGroupStyle = {
    marginTop: '30px'
}

// Component
class CustomInput extends Component {
    render() {
        const image = 'url(' + this.props.imagePath + ')'

        return (
            <FormGroup style={FormGroupStyle}>
                <Input 
                    type={this.props.type}
                    placeholder={ this.props.labelText } 
                    onChange={this.props.onChangeCallback}
                    style={{...InputStyle, ...{backgroundImage: image}}} 
                />
                <FormFeedback>{ this.props.feedback }</FormFeedback>
            </FormGroup>
        );
    }
}

// PropTypes
CustomInput.propTypes = {
    // imagePath: The require() image path to the image
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChangeCallback: PropTypes.func,
    feedback: PropTypes.string
}

export default CustomInput
