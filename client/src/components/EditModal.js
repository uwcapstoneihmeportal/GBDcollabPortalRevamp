import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import LoadingOverlay from 'react-loading-overlay'
import { DotLoader } from 'react-spinners'

// Styling
const BackdropStyle = { // The gray background
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 50,
    zIndex: 10
}


const ModalStyle = { // The modal "window"
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

// Component
class EditModal extends Component {

    // Calls prop callback to handle when Save button is pressed
    updateUserInfo(event) {
        event.preventDefault()
        this.props.onSave(this.state)
    }

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
          return null;
        }

        const { error } = this.props

        return (
            <div style={BackdropStyle}>
                <LoadingOverlay
                    active={this.props.loading}
                    spinner={<DotLoader color="#26a146" />}
                    styles={{
                        overlay: (base) => ({
                            ...base,
                            backgroundColor: 'transparent'
                        })
                    }}
                >
                    <div  style={ModalStyle}>
                        <Container>
                            <h1 style={{ textAlign: 'center', color: '#696969' }}>{this.props.title}</h1>
                            {this.props.data.map(field => {
                                return (
                                    <Row style={{paddingTop: '1vh', paddingBottom: '1vh'}}>
                                        <Col sm="3">
                                            <p style={TitleStyle}>{field.title}</p>
                                        </Col>
                                        <Col sm="9">
                                            <Form>
                                                <FormGroup>
                                                    <Input 
                                                        defaultValue={field.value.split(" \u2022 ").join(";")} 
                                                        onChange={e => {
                                                            var newState = {}
                                                            newState[field.name] = e.target.value
                                                            this.setState(newState)
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Form>
                                        </Col>
                                    </Row>
                                )
                            })}

                            <Row style={{ marginTop: '2vh'}}>
                                <Col sm="6" style={{margin: '0 auto'}}> 
                                    <button 
                                        onClick={this.updateUserInfo.bind(this)} 
                                        style={SaveButtonStyle}
                                    >
                                        Save
                                    </button>
                                </Col>
                                <Col sm="6" style={{margin: '0 auto'}}> 
                                    <button onClick={this.props.onClose} style={CancelButtonStyle}>
                                        Cancel
                                    </button>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" style={{color: 'red', textAlign: 'center', marginTop: '2vh'}}>
                                    {error}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </LoadingOverlay>
            </div>
        )
    }
}

// Redux
function mapStateToProps(state) {
    return {
        error: state.auth.error
    }
}

// PropTypes
EditModal.propTypes = {
    show: PropTypes.bool.isRequired, // whether the modal should be displayed
    onClose: PropTypes.func.isRequired, // What to do when modal is closed
    onSave: PropTypes.func, // What to do when Save is pressed
    title: PropTypes.string, // Title of the modal
    data: PropTypes.arrayOf(PropTypes.object), // title and value objects
    loading: PropTypes.bool, // Whether to show spinner after button click
}

export default connect(mapStateToProps)(EditModal)