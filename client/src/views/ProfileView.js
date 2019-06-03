import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import ProfileContentView from './ProfileContentView'
import ProfileBanner from '../components/ProfileBanner'
import UnderlinedTabs from '../components/UnderlinedTabs'

const TabContainerStyle = {
    paddingLeft: '12vh',
    paddingTop: '4vh',
    fontSize: '15pt'
}

const tabs = [
    { title: "Profile", content: <ProfileContentView /> },
    { title: "Related", content: <div></div> }
]

class ProfileView extends Component {
    render() {

        const { isAuthenticated } = this.props

        // If user is not authenticated, then redirect to sign in
        if (!isAuthenticated) {
            return (<Redirect to='/' />)
        }

        return (
            < div >
                <ProfileBanner />
                <UnderlinedTabs
                    default="Profile"
                    tabs={tabs}
                    style={TabContainerStyle}
                />
            </div >
        )
    }
}

// Redux
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}
export default withRouter(connect(mapStateToProps)(ProfileView))
