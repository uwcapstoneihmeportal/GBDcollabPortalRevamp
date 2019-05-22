import React, { Component } from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import 'react-web-tabs/dist/react-web-tabs.css'
import '../styles/profile.css'

class UnderlinedTabs extends Component {
    render() {
        const tabs = this.props.tabs
        return (
            <Tabs
                defaultTab={this.props.default}
            >
                <TabList style={this.props.style}>
                    {tabs.map(item => {
                        let title = item.title
                        return (
                            <Tab key={title} tabFor={title}>{title}</Tab>
                        )
                    })}
                </TabList>
                {tabs.map(item => {
                    let title = item.title
                    let content = item.content
                    return (
                        <TabPanel key={title} tabId={title}>
                            {content}
                        </TabPanel>
                    )
                })}
            </Tabs>
        )
    }
}

export default UnderlinedTabs