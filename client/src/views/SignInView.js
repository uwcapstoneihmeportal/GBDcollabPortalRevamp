import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { Container, Row, Col, Form } from 'reactstrap'
import LoadingOverlay from 'react-loading-overlay'
import { DotLoader } from 'react-spinners'
import SignInBanner from '../components/SignInBanner'
import CustomInput from '../components/CustomInput'
import AuthButton from '../components/AuthButton'

import { loginUser, logoutUser } from '../redux/actions'

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
const LoginErrorStyle = {
    color: 'red',
    textAlign: 'center'
}

class SignInView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

        // logout user if they visit this page or come back to it
        localStorage.removeItem('authToken')
        localStorage.removeItem('user')
        localStorage.removeItem('metaData')
        this.props.dispatch(logoutUser())
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
        const { isAuthenticated, isFetching, error } = this.props

        // check to see if we are authenticated, if so, redirect to home page
        if (isAuthenticated && !isFetching) {
            return (<Redirect push to='/home' />)
        }

        return (
            <LoadingOverlay
                active={isFetching}
                spinner={<DotLoader color="#26a146" />}
            >
                <Container style={{ maxWidth: '100%' }}>
                    <Row>
                        <Col sm="6" className='d-none d-sm-block' style={{ paddingLeft: '0' }}>
                            <SignInBanner />
                        </Col>
                        <Col xs="12" sm="6">

                            {<img src={require("../images/ihme_logo.png")} alt="IHME logo" className="d-sm-none d-xs-block" style={{ paddingTop: '10px', height: '80px' }} />}

                            <div style={FormContainerStyle}>
                                <h1 style={H1Style}>
                                    Sign in
                                </h1>
                                <Form>
                                    <CustomInput
                                        ref="email"
                                        labelText="Email"
                                        onChangeCallback={e => this.setState({ email: e.target.value })}
                                        imagePath={require("../images/green_user.png")}
                                    />
                                    <CustomInput
                                        ref="password"
                                        labelText="Password"
                                        type="password"
                                        onChangeCallback={e => this.setState({ password: e.target.value })}
                                        imagePath={require("../images/password.png")}
                                    />
                                </Form>
                                <div style={{ marginTop: '60px' }}>
                                    <AuthButton
                                        labelText="Sign in"
                                        onClick={this.handleSubmit}
                                    />
                                </div>
                                <p style={LoginErrorStyle}>{error}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </LoadingOverlay>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching,
        error: state.auth.error
    }
}

export default withRouter(connect(mapStateToProps)(SignInView))
