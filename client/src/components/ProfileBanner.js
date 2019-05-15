import React, { Component } from 'react';

const jobIcon = require('../images/job.png')
const locationIcon = require('../images/location.png')

const BannerStyle = {
    background: 'linear-gradient(#cbe2a0, #26a146)',
    color: 'white',
    marginBottom: '15px',
    paddingTop: '15vh',
    paddingLeft: '8vh',
    paddingBottom: '15vh',
}

const ImageStyle = {
    height: '25px'
}

const LabelStyle = {
    fontSize: '20px',
    marginLeft: '10px',
    marginRight: '10px'
}

class ProfileBanner extends Component {
    render() {
        return (
            <div style={BannerStyle}>
                <h1>Hello, Sam!</h1>
                <div>
                    <img src={jobIcon} alt="job image icon" style={ImageStyle} />
                    <span style={LabelStyle}>
                        Health Specialist
                    </span>
                    <img src={locationIcon} alt="location image icon" style={ImageStyle} />
                    <span style={LabelStyle}>
                        United States, WA
                    </span>
                </div>
            </div>
        )
    }
}

export default ProfileBanner
