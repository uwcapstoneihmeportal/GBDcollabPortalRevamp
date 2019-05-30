import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

class AuthorshipView extends Component {
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
                title: 'General',
                data: [
                    {
                        title: 'countries and territories',
                        value: state.auth.user.Countries_and_Territories__c.split(";")
                    },
                    {
                        title: 'demography',
                        value: state.auth.user.Demography_Expert__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'risk factors',
                        value: state.auth.user.Risk_Factors__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'impairments',
                        value: state.auth.user.Impairments__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'health systems',
                        value: state.auth.user.Health_Systems_Expert__c.split(";").join(" \u2022 ")
                    },
                    {
                        title: 'disease registry',
                        value: state.auth.user.Disease_Registry_Expert__c.split(";").join(" \u2022 ")
                    }
                ]
            },
            {
                title: 'Communicable/Maternal/Neonatal/Nutritional Diseases',
                data: [
                    {
                        title: commMatNeoNutriCleaned[0].header,
                        value: commMatNeoNutriCleaned[0].vals
                    },
                    {
                        title: commMatNeoNutriCleaned[1].header,
                        value: commMatNeoNutriCleaned[1].vals
                    },
                    {
                        title: commMatNeoNutriCleaned[2].header,
                        value: commMatNeoNutriCleaned[2].vals
                    },
                    {
                        title: commMatNeoNutriCleaned[3].header,
                        value: commMatNeoNutriCleaned[3].vals
                    },
                ]
            },
            {
                title: 'Comm/Mat/Neo/Nutri..Continued',
                data: [
                    {
                        title: commMatNeoNutriCleaned[4].header,
                        value: commMatNeoNutriCleaned[4].vals
                    },
                    {
                        title: commMatNeoNutriCleaned[5].header,
                        value: commMatNeoNutriCleaned[5].vals
                    },
                    {
                        title: commMatNeoNutriCleaned[6].header,
                        value: commMatNeoNutriCleaned[6].vals
                    },
                ]
            },
            {
                title: 'Non-Communicable Diseases',
                data: [
                    {
                        title: nonCommCleaned[0].header,
                        value: nonCommCleaned[0].vals
                    },
                    {
                        title: nonCommCleaned[1].header,
                        value: nonCommCleaned[1].vals
                    },
                    {
                        title: nonCommCleaned[2].header,
                        value: nonCommCleaned[2].vals
                    },
                    {
                        title: nonCommCleaned[3].header,
                        value: nonCommCleaned[3].vals
                    },
                ]
            },
            {
                title: 'Injuries',
                data: [
                    {
                        title: injuresCleaned[0].header,
                        value: injuresCleaned[0].vals
                    }
                ]
            }
        ]
    }
}


export default connect(mapStateToProps)(AuthorshipView)
