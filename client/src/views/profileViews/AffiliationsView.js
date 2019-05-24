import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

class AffiliationsView extends Component {
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
                title: 'Basic Information',
                data: [
                    {
                        title: 'name',
                        value: state.auth.user.Name
                    },
                    {
                        title: 'gender',
                        value: state.auth.user.Gender__c
                    },
                    {
                        title: 'age',
                        value: state.auth.user.Age__c
                    },
                    {
                        title: 'language(s)',
                        value: state.auth.user.Language_s_Spoken__c
                    },
                ]
            },
            {
                title: 'Contact Information',
                data: [
                    {
                       title: 'primary email',
                       value: state.auth.user.Primary_Email__c 
                    },
                    {
                        title: 'alternate email',
                        value: state.auth.user.npe01__AlternateEmail__c
                    },
                    {
                        title: 'phone',
                        value: state.auth.user.Phone
                    },
                    {
                        title: 'skype id',
                        value: state.auth.user.Language_s_Spoken__c
                    },
                ]
            },
            {
                title: 'Work and Education',
                data: [
                    {
                       title: 'highest degree',
                       value: state.auth.user.Highest_Degree__c 
                    },
                    {
                        title: 'degree(s)',
                        value: state.auth.user.Degree_s__c
                    },
                    {
                        title: 'position',
                        value: state.auth.user.Position__c
                    },
                ]
            },
            {
                title: 'Location',
                data: [
                    {
                       title: 'mailing address',
                       value: state.auth.user.MailingAddress
                    },
                    {
                        title: 'gbd region',
                        value: state.auth.user.GBD_Region__c
                    },
                    {
                        title: 'world bank income level',
                        value: state.auth.user.World_Bank_Income_Level__c
                    },
                ]
            }
        ]
    }
}


export default connect(mapStateToProps)(AffiliationsView)
