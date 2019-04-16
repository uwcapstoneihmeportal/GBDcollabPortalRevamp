import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

import AuthForm from '../components/AuthForm'
import AuthButton from '../components/AuthButton'
import LoadingIcon from '../components/LoadingIcon'

import { withRouter, Redirect } from 'react-router-dom'

const bannerImagePath = require('../images/login.jpg')

const imageStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: '100vh'
}

const H1Style = {
    marginTop: '0px',
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'bold'
}

class SignInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            referrer: null,
            loading: false
        };
    }

    handleClick = () => {
        this.setState({ loading: true })

        setTimeout(() => {
            this.setState({ referrer: '/home' })
            this.setState({ loading: false })
        }, 2 * 1000)
    }

    render() {
        const { referrer } = this.state;
        if (referrer) return <Redirect to={referrer} />;

        return (
            <Container style={{ maxWidth: '100%' }}>
                <Row >
                    <Col sm="6" className='d-none d-sm-block' style={{ paddingLeft: '0' }}>
                        <img src={bannerImagePath} alt="test"
                            style={imageStyle} />
                    </Col>
                    <Col sm="6" className='my-auto'>
                        {/* <img src={require("../images/ihme_logo.png")} alt="IHME logo" style={{ paddingTop: '10px', height: '80px' }} /> */}

                        <h1 style={H1Style}>Sign in</h1>
                        <form>
                            <AuthForm labelText="Email" imagePath={require("../images/user.png")}/>
                            <AuthForm labelText="Password" type="password" imagePath={require("../images/password.png")}/>
                        </form>
                        <div style={{ marginTop: '60px'}}>
                            <LoadingIcon loading={this.state.loading} />
                            <AuthButton labelText="Sign in" onClick={this.handleClick} />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(SignInView)
