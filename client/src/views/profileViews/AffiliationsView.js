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
                title: 'Primary Affiliation',
                data: [
                    {
                        title: 'name',
                        value: "Generic U"
                    },
                    {
                        title: 'department',
                        value: state.auth.user.Primary_Affiliation_Department__c
                    },
                    {
                        title: 'address',
                        value: state.auth.user.Primary_Affiliation_Street_Address__c
                    },
                    {
                        title: 'city',
                        value: state.auth.user.Primary_Affiliation_City__c
                    },
                    {
                        title: 'state or province',
                        value: state.auth.user.Primary_Affiliation_State_or_Province__c
                    },
                    {
                        title: 'country',
                        value: state.auth.user.Primary_Affiliation_Country__c
                    }
                ]
            },
            {
                title: 'Secondary Affiliation',
                data: [
                    {
                        title: 'name',
                        value: "Generic State"
                    },
                    {
                        title: 'department',
                        value: state.auth.user.Secondary_Affiliation_Department__c
                    },
                    {
                        title: 'address',
                        value: state.auth.user.Secondary_Affiliation_Street_Address__c
                    },
                    {
                        title: 'city',
                        value: state.auth.user.Secondary_Affiliation_City__c
                    },
                    {
                        title: 'state or province',
                        value: state.auth.user.Secondary_Affiliation_State_or_Province__c
                    },
                    {
                        title: 'country',
                        value: state.auth.user.Primary_Affiliation_Country__c
                    }
                ]
            }
        ]
    }
}


export default connect(mapStateToProps)(AffiliationsView)
