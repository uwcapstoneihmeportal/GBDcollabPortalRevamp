import React, { Component } from 'react'
import ProfileContentView from './ProfileContentView'
import ProfileBanner from '../components/ProfileBanner'
import UnderlinedTabs from '../components/UnderlinedTabs'

const TabContainerStyle = {
    paddingLeft: '12vh',
    paddingTop: '4vh',
    fontSize: '15pt'
}

const tabs = [
    {title: "Profile", content: <ProfileContentView />},
    {title: "Related", content: <div></div>}
]   

class ProfileView extends Component {
    render() {
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

export default ProfileView
