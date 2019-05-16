import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import ProfileContentView from './ProfileContentView'
import ProfileBanner from '../components/ProfileBanner'
import ProfileNavBar from '../components/ProfileNavBar'

const TabsContainerStyle = {
    fontSize: '15pt',
    marginTop: '5vh',
    paddingLeft: '12vh',

}

class ProfileView extends Component {
    render() {
        return (
            <div>
                <ProfileNavBar />
                <ProfileBanner />
                <Tabs defaultActiveKey="details" style={TabsContainerStyle}>
                    <Tab eventKey="details" title="Details">
                        <ProfileContentView />
                    </Tab>
                    <Tab eventKey="related" title="Related">
                    </Tab>
                </Tabs>
            </div >
        );
    }
}

export default ProfileView

// import CoolTabs from 'react-cool-tabs';

// const TabsHeaderStyle = {
//     fontSize: '15pt',
//     marginTop: '5vh',
//     marginLeft: '12vh',
//     width: '20%'
// }

// const ActiveTabBottomBorderStyle = {
//     backgroundColor: '#26a146',
//     height: 3,
// }

// const ActiveTabStyle = {
//     color: '#26a146'
// }

// {/* For more info on CoolTabs, visit the documentation below 
//                 https://reactjsexample.com/a-very-comfortable-package-to-use-tabs-in-react/ 
//                 */}
//                 <CoolTabs
//                 // Style for the container and header
//                 tabKey={'1'}
//                 style={{ width: '100%', background: 'white' }}
//                 tabsHeaderStyle={TabsHeaderStyle}
//                 activeTabStyle={{ background: 'white', color: '#26a146' }}
//                 unActiveTabStyle={{ background: 'clear', color: '#c1c1c1' }}

//                 // Left Tab style
//                 leftTabTitle={'Details'}
//                 leftContent={<ProfileContentView />}
//                 activeLeftTabBorderBottomStyle={ActiveTabBottomBorderStyle}

//                 // Right Tab Style
//                 rightTabTitle={'Related'}
//                 rightContent={<div></div>}
//                 activeRightTabBorderBottomStyle={ActiveTabBottomBorderStyle}                    

//                 // Transition animations
//                 contentTransitionStyle={'transform 0.3s ease-in'}
//                 borderTransitionStyle={'all 0.3s ease-in'} />