import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form } from 'reactstrap'

// The gray background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 50,
    zIndex: 10
}

// The modal "window"
const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 600,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    zIndex: 11
}

class EditModal extends Component {
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
          return null;
        }

        return (
            <div style={backdropStyle}>
                <div  style={modalStyle}>
                    <Container>
                        {this.props.children}




                        <Row>
                            <Col sm="6">
                                <button>
                                    Save
                                </button>
                            </Col>
                            <Col sm="6">
                                <button onClick={this.props.onClose}>
                                    Close
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

EditModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default EditModal;