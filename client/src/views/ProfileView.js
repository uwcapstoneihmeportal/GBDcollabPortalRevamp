import React, { Component } from 'react';
import CoolTabs from 'react-cool-tabs';
import ProfileInformationView from './ProfileInformationView'
import ProfileBanner from '../components/ProfileBanner'
import ProfileNavBar from '../components/ProfileNavBar'

const TabsHeaderStyle = {
    marginLeft: '8vh',
    width: '20%'
}

const ActiveTabBottomBorderStyle = { 
    backgroundColor: '#26a146', 
    height: 4 
}

const ActiveTabStyle = {
    color: '#26a146'
}

class ProfileView extends Component {
    render() {
        return (
            <div>
                <ProfileNavBar />
                <ProfileBanner />
                {/* For more info on CoolTabs, visit the documentation below 
                https://reactjsexample.com/a-very-comfortable-package-to-use-tabs-in-react/ 
                */}
                <CoolTabs
                    // Style for the container and header
                    tabKey={'1'}
                    style={{ width: '100%', background: 'white' }}
                    tabsHeaderStyle={TabsHeaderStyle}
                    activeTabStyle={{ background: 'white', color: '#26a146' }}
                    unActiveTabStyle={{ background: 'clear', color: '#808080' }}

                    // Left Tab style
                    leftTabTitle={'Details'}
                    leftContent={<ProfileInformationView />}
                    activeLeftTabBorderBottomStyle={ActiveTabBottomBorderStyle}
                    
                    leftContentStyle={{ background: 'lightgreen'}}
                    rightContentStyle={{ background: 'lightblue' }}
                    
                    // Right Tab Style
                    rightTabTitle={'Related'}
                    rightContent={<div></div>}
                    activeRightTabBorderBottomStyle={ActiveTabBottomBorderStyle}                    

                    // Transition animations
                    contentTransitionStyle={'transform 0.3s ease-in'}
                    borderTransitionStyle={'all 0.3s ease-in'} />
            </div >
        );
    }
}

export default ProfileView