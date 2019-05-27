import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

class DetailsView extends Component {
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

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}

function mapStateToProps(state) {
    let formattedPhoneNumber = formatPhoneNumber(state.auth.user.Phone)

    return {
        cards: [
            {
                title: 'Basic Information',
                data: [
                    {
                        title: 'prefix',
                        value: state.auth.user.Prefix__c
                    },
                    {
                        title: 'first name',
                        value: state.auth.user.FirstName
                    },
                    {
                        title: 'last name',
                        value: state.auth.user.LastName
                    },
                    {
                        title: 'gender',
                        value: state.auth.user.Gender__c
                    },
                    {
                        title: 'age',
                        value: state.auth.user.Age__c
                    }
                ]
            },
            {
                title: 'Contact Information',
                data: [
                    {
                        title: 'language(s)',
                        value: state.auth.user.Language_s_Spoken__c.split(";").join("-")
                    },
                    {
                        title: 'preferred contact type',
                        value: state.auth.user.What_is_the_Best_Way_to_Contact_You__c
                    },
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
                        value: formattedPhoneNumber
                    },
                    {
                        title: 'skype id',
                        value: state.auth.user.Skype_ID__c
                    }
                ]
            },
            {
                title: 'Work & Education',
                data: [
                    {
                        title: 'position',
                        value: state.auth.user.Position__c
                    },
                    {
                        title: 'degree(s)',
                        value: state.auth.user.Degree_s__c.split(";").join("-")
                    },
                    {
                        title: 'highest degree',
                        value: state.auth.user.Highest_Degree__c
                    },
                    {
                        title: 'previous cycle',
                        value: state.auth.user.Author_on_Previous_Cycle__c
                    },
                ]
            },
            {
                title: 'Location & Mailing Address',
                data: [
                    {
                        title: 'street',
                        value: state.auth.user.MailingStreet
                    },
                    {
                        title: 'city',
                        value: state.auth.user.MailingCity
                    },
                    {
                        title: 'state',
                        value: state.auth.user.MailingState
                    },
                    {
                        title: 'country',
                        value: state.auth.user.MailingCountry
                    },
                    {
                        title: 'postal code',
                        value: state.auth.user.MailingPostalCode
                    }
                ]
            }
        ]
    }
}

export default connect(mapStateToProps)(DetailsView)
