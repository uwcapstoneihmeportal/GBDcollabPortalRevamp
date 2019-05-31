import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'

import DetailsView from '../views/profileViews/DetailsView'
import AffiliationsView from '../views/profileViews/AffiliationsView'
import EngagementView from '../views/profileViews/EngagementView'
import ExpertiseView from '../views/profileViews/ExpertiseView'
import AuthorshipView from '../views/profileViews/AuthorshipView'

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
        content: <AffiliationsView />
    },
    {
        tabTitle: 'Engagement Details',
        content: <EngagementView />
    },
    {
        tabTitle: 'Area of Expertise',
        content: <ExpertiseView />
    },
    {
        tabTitle: 'Authorship Information',
        content: <AuthorshipView />
    }
]

class ProfileContentView extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default ProfileContentView
