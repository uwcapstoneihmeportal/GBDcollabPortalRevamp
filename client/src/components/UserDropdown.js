import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import { logoutUser } from '../redux/actions'

const DropdownToggleStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    marginRight: '10px',
    textAlign: 'right'
}

const BaseImageStyle = {
    height: '30px', 
    marginBottom: '5px',
    marginRight: '5px'
}

const DropdownImageStyle = {
    marginLeft: '10px'
}

const userImage = require('../images/user.png')
const dropdownImage = require('../images/dropdown.png')

class UserDropdown extends Component {

    logoutUser(event) {
        event.preventDefault()

        localStorage.removeItem('authToken')
        localStorage.removeItem('user')
        localStorage.removeItem('metaData')

        this.props.dispatch(logoutUser())
        this.props.history.push('/')
    }


    render() {
        const { firstName } = this.props
        const welcomeUser = "Welcome, " + firstName 

        return (
            <UncontrolledDropdown style={{textAlign: 'right', marginTop: '40px'}}>
                <DropdownToggle style={DropdownToggleStyle}>
                    <img src={userImage} alt="user" style={{...BaseImageStyle}}/>
                    {welcomeUser}
                    <img src={dropdownImage} alt="user" style={{...BaseImageStyle, ...DropdownImageStyle}}/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem 
                        onClick={e => {this.props.history.push('/profile')}}
                    >
                    View Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem 
                        onClick={this.logoutUser.bind(this)}
                        style={{ color: 'red' }}
                    >
                    Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}

// Redux
function mapStateToProps(state) {
    return {
        firstName: state.auth.user.FirstName
    }
}

export default connect(mapStateToProps)(withRouter(UserDropdown))
