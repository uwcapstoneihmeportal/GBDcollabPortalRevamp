import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../components/CardContainer'

import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
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
        tabTitle: 'Profile',
        content: [
            <CardContainer />,
            <CardContainer />
        ]
    },
    {
        tabTitle: 'Affiliations',
        content: [<div></div>]
    },
    {
        tabTitle: 'Engagment Details',
        content: [<div></div>]
    },
]

class ProfileContentView extends Component {
    render() {
        // let items = [
        //     "Profile",
        //     "Affiliations",
        //     "Engagment Details",
        //     "Area of Expertise",
        //     "Authorship Information",
        //     "System Information"
        // ]

        return (
            <Tabs
                defaultTab={this.props.default}
                vertical
                style={ContainerStyle}
            >
                <TabList style={this.props.style}>
                    {tabs.map(item => {
                        let title = item.tabTitle
                        return (
                            <Tab key={title} tabFor={title}>{title}</Tab>
                        )
                    })}
                </TabList>
                {tabs.map(item => {
                    let title = item.tabTitle
                    let content = item.content
                    return (
                        <TabPanel key={title} tabId={title} style={{ width: '100%', marginLeft: '12vh' }}>
                            <Container>
                                {content.map(card => {
                                    return (
                                        <Row style={{marginBottom: '6vh'}}>
                                            <Col xs="12">
                                                {card}
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Container>
                        </TabPanel>
                    )
                })}
            </Tabs>
        )
    }
}

export default ProfileContentView
