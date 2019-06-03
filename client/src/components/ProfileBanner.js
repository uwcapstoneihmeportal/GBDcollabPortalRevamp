import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProfileNavbar from './ProfileNavBar'

// Styling
const BannerStyle = {
    background: 'linear-gradient(#cbe2a0, #26a146)',
    color: 'white',
    paddingBottom: '10vh',
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

// Images
const jobIcon = require('../images/job.png')
const locationIcon = require('../images/location.png')


// Components
class ProfileBanner extends Component {
    render() {

        const { firstName, position, location } = this.props
        const greeting = "Hello, " + firstName + "!"

        return (
            <div style={BannerStyle}>
                <ProfileNavbar />
                <h1>{greeting}</h1>
                <div>
                    <img src={jobIcon} alt="job icon" style={ImageStyle} />
                    <span style={LabelStyle}>
                        {position}
                    </span>
                    <img src={locationIcon} alt="location icon" style={ImageStyle} />
                    <span style={LabelStyle}>
                        {location}
                    </span>
                </div>
            </div>
        )
    }
}

// Redux
function mapStateToProps(state) {
    return {
        firstName: state.auth.user.FirstName,
        position: state.auth.user.Position__c,
        location: state.auth.user.MailingCountry + ", " + state.auth.user.MailingState
    }
}

// PropTypes
ProfileBanner.propTypes = {
    firstName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(ProfileBanner)
