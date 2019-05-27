import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import ProfileContentView from './ProfileContentView'
import ProfileBanner from '../components/ProfileBanner'
import UnderlinedTabs from '../components/UnderlinedTabs'

const TabContainerStyle = {
    paddingLeft: '12vh',
    paddingTop: '6vh',
    fontSize: '15pt'
}

const EditProfileButtonStyle = {
    background: 'linear-gradient(#cbe2a0, #26a146)',
    border: '0',
    borderRadius: '25px',
    float: 'right',
    marginRight: '4vh',
    paddingLeft: '6vh',
    paddingRight: '6vh',
    position: 'relative',
    top: '6vh'
}

const tabs = [
    {title: "Profile", content: <ProfileContentView />},
    {title: "Related", content: <div></div>}
]   

class ProfileView extends Component {
    handleEditProfileClick(event) {
        event.preventDefault()
        // Do something to UI, and allow fields to be changed

        // make a post request for the new data
    }

    render() {
        return (
            < div >
                <ProfileBanner />
                <div>
                    <Button 
                        style={EditProfileButtonStyle}
                        onClick={this.handleEditProfileClick.bind(this)}
                    >
                        Edit Profile
                    </Button>
                    <UnderlinedTabs 
                        default="Profile"
                        tabs={tabs}
                        style={TabContainerStyle}
                    />
                </div>
            </div >
        )
    }
}

export default ProfileView
