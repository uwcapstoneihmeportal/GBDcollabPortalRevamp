import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

class EngagementViews extends Component {
    render() {
        const { cards } = this.props

        return (
            <Container>
                {cards.map(card => {
                    return (
                        <Row style={{ marginBottom: '6vh' }}>
                            <Col xs="12">
                                <CardContainer
                                    title={card.title}
                                    data={card.data}
                                />
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards: [
            {
                title: 'My Role & Interests',
                data: [
                    {
                        title: 'how would you like to interact?',
                        value: state.auth.user.How_Would_You_Like_to_Interact__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'your involvement',
                        value: state.auth.user.GBD_Data_Collaboration_Involvement__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'present, teach, how, or discuss?',
                        value: state.auth.user.Do_You_Present_Teach_Show_or_Discuss__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'regularly used tools',
                        value: state.auth.user.Regularly_Used_IHME_Tools__c.split(";").join(" \u2022 ")
                    }
                ]
            },
            {
                title: 'Engagement',
                data: [
                    {
                        title: 'how did you hear about the gbd network?',
                        value: state.auth.user.How_Did_You_Hear_About_the_Network__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'gdb 2019 participation',
                        value: state.auth.user.GBD_2019_Participation__c
                    },
                    {
                        title: 'policy engagement',
                        value: state.auth.user.Policy_Engagement__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'which gbd activity or event?',
                        value: state.auth.user.Which_GBD_Activity_or_Event__c.split(";").join(" \u2022 ")
                    }
                ]
            }
        ]
    }
}


export default connect(mapStateToProps)(EngagementViews)
