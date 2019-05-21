import React, { Component } from 'react'
import ProfileContentView from './ProfileContentView'
import ProfileBanner from '../components/ProfileBanner'
import ProfileNavBar from '../components/ProfileNavBar'

const TabsContainerStyle = {
    fontSize: '15pt',
    marginTop: '8vh',
    height: '8vh',
    paddingLeft: '12vh',
}

// Tab title : content view
const tabs = {
    "Details": <ProfileContentView />, 
    "Related": <div></div>
}

class ProfileView extends Component {
    render() {        
        return (
            < div >
                <ProfileBanner />
            </div >
        )
    }
}

export default ProfileView
