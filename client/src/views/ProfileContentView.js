import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'

import DetailsView from '../views/profileViews/DetailsView'
import AffiliationsView from '../views/profileViews/AffiliationsView'

import 'react-web-tabs/dist/react-web-tabs.css'

const ContainerStyle = {
    textAlign: 'left',
    marginLeft: '4vh',
    marginRight: '12vh',
    marginTop: '4vh',
    marginBottom: '8vh'
}

const tabs = [
    {
        tabTitle: 'Details',
        content: <DetailsView />
    },
    {
        tabTitle: 'Affiliations',
        content: <div></div>
    },
    {
        tabTitle: 'Engagment Details',
        content: <div></div>
    },
    {
        tabTitle: 'Area of Expertise',
        content: <div></div>
    },
    {
        tabTitle: 'Authorship Information',
        content: <div></div>
    },
    {
        tabTitle: 'Change Password',
        content: <div></div>
    }
]

class ProfileContentView extends Component {
    render() {
        return (
            <Tabs
                defaultTab={this.props.default}
                vertical
                style={ContainerStyle}
            >
                <TabList style={this.props.style}>
                    {tabs.map(tab => {
                        let title = tab.tabTitle
                        return (
                            <Tab key={title} tabFor={title}>
                                {title}
                            </Tab>
                        )
                    })}
                </TabList>

                {tabs.map(item => {
                    let title = item.tabTitle
                    return (
                        <TabPanel
                            key={title}
                            tabId={title}
                            style={{ width: '100%', marginLeft: '12vh' }}
                        >
                            {item.content}
                        </TabPanel>
                    )
                })}
            </Tabs>
        )
    }
}

export default ProfileContentView
