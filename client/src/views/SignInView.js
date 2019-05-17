import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Components
import SignInBanner from '../components/SignInBanner'
import CustomInput from '../components/CustomInput'
import AuthButton from '../components/AuthButton'

import { Container, Row, Col, Form } from 'reactstrap'
import LoadingOverlay from 'react-loading-overlay'
import { DotLoader } from 'react-spinners'

// Actions
import { loginUser } from '../actions'

// Images
const ihme_logo = require("../images/ihme_logo.png")

// Styling
const H1Style = {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'bold'
}

const FormContainerStyle = {
    margin: 'auto', 
    position: 'absloute', 
    transform: 'translate(0%, 40%)'
}

class SignInView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // TODO, logout user if they go back to the sign in page
    }

    handleSubmit(event) {
        event.preventDefault()
        // TODO: do some client side checks for the given fields
        
        const email = this.state.email.trim()
        const password = this.state.password.trim()

        if (email.length > 0 && password.length > 0) {
            this.props.dispatch(loginUser(email, password))
        }
    }

    render() {
        const { isAuthenticated, isFetching } = this.props

        // check to see if we are authenticated, if so, redirect to home page
        if (isAuthenticated && !isFetching) {
            return (<Redirect to='/home' /> )
        }
 
        return (
            <LoadingOverlay 
                active={isFetching}      
                spinner={<DotLoader color="#26a146"/>} 
            >
                <Container style={{ maxWidth: '100%' }}>
                    <Row>
                        <Col sm="6" className='d-none d-sm-block' style={{ paddingLeft: '0' }}>
                            <SignInBanner />
                        </Col>
                        <Col xs="12" sm="6">
                            {<img src={ihme_logo} alt="IHME logo" className="d-sm-none d-xs-block" style={{ paddingTop: '10px', height: '80px' }} />}

                            <div style={FormContainerStyle}>
                                <h1 style={H1Style}>
                                    Sign in
                                </h1>
                                <Form>
                                    <CustomInput
                                        ref="email"
                                        labelText="Email"
                                        onChangeCallback={e => this.setState({email: e.target.value})}
                                        imagePath={require("../images/green_user.png")}
                                    />
                                    <CustomInput 
                                        ref="password"
                                        labelText="Password" 
                                        type="password"
                                        onChangeCallback={e => this.setState({password: e.target.value})}
                                        imagePath={require("../images/password.png")}
                                    />
                                </Form>
                                <div style={{ marginTop: '60px'}}>
                                    <AuthButton 
                                        labelText="Sign in" 
                                        onClick={this.handleSubmit} 
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </LoadingOverlay>
        )
    }
}

// Redux
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps)(SignInView)
