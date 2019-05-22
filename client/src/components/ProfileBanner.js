import React, { Component } from 'react';

import ProfileNavbar from './ProfileNavBar'

const jobIcon = require('../images/job.png')
const locationIcon = require('../images/location.png')

const BannerStyle = {
    background: 'linear-gradient(#cbe2a0, #26a146)',
    color: 'white',
    paddingBottom: '15vh',
    textAlign: 'center'
}

const ImageStyle = {
    height: '25px'
}

const LabelStyle = {
    fontSize: '20px',
    marginLeft: '2vh',
    marginRight: '4vh'
}

class ProfileBanner extends Component {
    render() {
        return (
            <div style={BannerStyle}>
                <ProfileNavbar />
                <h1>Hello, Sam!</h1>
                <div>
                    <img src={jobIcon} alt="job icon" style={ImageStyle} />
                    <span style={LabelStyle}>
                        Health Specialist
                    </span>
                    <img src={locationIcon} alt="location icon" style={ImageStyle} />
                    <span style={LabelStyle}>
                        United States, WA
                    </span>
                </div>
            </div>
        )
    }
}

export default ProfileBanner
