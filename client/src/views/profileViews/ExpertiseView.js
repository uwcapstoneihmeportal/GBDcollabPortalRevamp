import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileCard from '../../components/ProfileCard'

class ExpertiseView extends Component {
    render() {
        const { cards } = this.props

        return (
            <Container>
                {cards.map(card => {
                    return (
                        <Row style={{ marginBottom: '6vh' }}>
                            <Col xs="12">
                                <ProfileCard
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

function cleanAndFilter(values, section, start, end) {
    var results = []
    const split = values.split(";")

    var i;
    for (i = start; i <= end; i++) {
        var filtered = split.filter(val => {
            const category = section + "." + i
            return val.indexOf(category) === 0
        })
        results.push({
            header: filtered.shift(),
            vals: filtered
        })
    }
    return results
}

function mapStateToProps(state) {
    const commMatNeoNutri = state.auth.user.A_Comm_Mat_Neo_Nutri_Diseases__c
    const nonCommunicable = state.auth.user.B_Non_communicable_Diseases__c
    const injuries = state.auth.user.C_Injuries__c

    var commMatNeoNutriCleaned = cleanAndFilter(commMatNeoNutri, "A", 1, 7)
    var nonCommCleaned = cleanAndFilter(nonCommunicable, "B", 9, 12)
    var injuresCleaned = cleanAndFilter(injuries, "C", 1, 1)

    return {
        cards: [
            {
                title: 'General',
                data: [
                    {
                        title: 'countries and territories',
                        value: state.auth.user.Countries_and_Territories__c.split(";").join(" \u2022 "),
                        name: 'Countries_and_Territories__c'
                    },
                    {
                        title: 'demography',
                        value: state.auth.user.Demography_Expert__c.split(";").join(" \u2022 "),
                        name: 'Demography_Expert__c'
                    },
                    {
                        title: 'risk factors',
                        value: state.auth.user.Risk_Factors__c.split(";").join(" \u2022 "),
                        name: 'Risk_Factors__c'
                    },
                    {
                        title: 'impairments',
                        value: state.auth.user.Impairments__c.split(";").join(" \u2022 "),
                        name: 'Impairments__c'
                    },
                    {
                        title: 'health systems',
                        value: state.auth.user.Health_Systems_Expert__c.split(";").join(" \u2022 "),
                        name: 'Health_Systems_Expert__c'
                    },
                    {
                        title: 'disease registry',
                        value: state.auth.user.Disease_Registry_Expert__c.split(";").join(" \u2022 "),
                        name: 'Disease_Registry_Expert__c'
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


export default connect(mapStateToProps)(ExpertiseView)
