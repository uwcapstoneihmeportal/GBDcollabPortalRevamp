import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form } from 'reactstrap'

// The gray background
const BackdropStyle = {
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
const ModalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 600,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    zIndex: 11,
    overflowY: 'auto',
    maxHeight: '85vh'
}

const SaveButtonStyle = {
    background: 'linear-gradient(#cbe2a0, #26a146)',
    borderRadius: '10px',
    color: 'white',
    padding: '2vh',
    width: '100%'
}

const CancelButtonStyle = {
    backgroundColor: '#C0C0C0 ',
    borderRadius: '10px',
    color: 'white',
    padding: '2vh',
    width: '100%'
}

const TitleStyle = {
    textTransform: 'uppercase',
    color: '#c1c1c1'
}


class EditModal extends Component {
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
          return null;
        }

        return (
            <div style={BackdropStyle}>
                <div  style={ModalStyle}>
                    <Container>
                        <h1 style={{ textAlign: 'center', color: '#696969' }}>{this.props.title}</h1>
                        {this.props.data.map(field => {
                            return (
                                <Row style={{paddingTop: '2vh', paddingBottom: '2vh'}}>
                                    <Col sm="3">
                                        <p style={TitleStyle}>{field.title}</p>
                                    </Col>
                                    <Col sm="9">
                                        <p>{field.value}</p>
                                    </Col>
                                </Row>
                            )
                        })}

                        <Row style={{ marginTop: '2vh'}}>
                            <Col sm="6" style={{margin: '0 auto'}}> 
                                <button style={SaveButtonStyle}>
                                    Save
                                </button>
                            </Col>
                            <Col sm="6" style={{margin: '0 auto'}}> 
                                <button onClick={this.props.onClose} style={CancelButtonStyle}>
                                    Cancel
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default EditModal;