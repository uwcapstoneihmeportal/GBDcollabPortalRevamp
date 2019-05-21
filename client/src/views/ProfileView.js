import React, { Component } from 'react'

import ProfileContentView from './ProfileContentView'
import ProfileBanner from '../components/ProfileBanner'
import ProfileNavBar from '../components/ProfileNavBar'
import UnderlinedTabs from '../components/UnderlinedTabs'

const TabsContainerStyle = {
    fontSize: '15pt',
    marginTop: '8vh',
    paddingLeft: '12vh',
}

class ProfileView extends Component {
    constructor(props) {
        super(props)
        this.state = {activeTab: 'Details'}
    }

    render() {

        return (
            < div >
                <ProfileBanner />
            </div >
        )
    }
}

export default ProfileView
