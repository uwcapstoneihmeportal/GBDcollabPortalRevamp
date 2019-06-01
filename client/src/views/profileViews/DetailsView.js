import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'
import EditModal from '../../components/EditModal'

import { openModal, closeModal } from '../../redux/actions'

class DetailsView extends Component {
    displayEditModal(title, data) {
        console.log(title)
        console.log(data)

        this.props.dispatch(openModal(title, data))
    }

    closeModal() {
        this.props.dispatch(closeModal())
    }

    render() {
        const { isEditModalOpen, cards, modalTitle, modalData } = this.props

        return (
            <div>
                {/* Modal View displayed when editing */}
                <EditModal
                    show={isEditModalOpen}
                    onClose={this.closeModal.bind(this)}
                    title={modalTitle}
                    data={modalData}
                />

                <Container>
                    {cards.map(card => {
                        return (
                            <Row style={{ marginBottom: '6vh' }}>
                                <Col xs="12">
                                    <CardContainer
                                        title={card.title}
                                        data={card.data}
                                        onEditClicked={this.displayEditModal.bind(this)}
                                    />
                                </Col>
                            </Row>
                        )
                    })}
                </Container>
            </div>
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

    console.log(state)

    return {
        isEditModalOpen: state.auth.isEditModalOpen,
        modalTitle: state.auth.modalTitle,
        modalData: state.auth.modalData,
        cards: [
            {
                title: 'Basic Information',
                data: [
                    {
                        title: 'prefix',
                        value: state.auth.user.Prefix__c,
                        field: 'Prefix__c'
                    },
                    {
                        title: 'first name',
                        value: state.auth.user.FirstName,
                        field: 'FirstName'
                    },
                    {
                        title: 'last name',
                        value: state.auth.user.LastName,
                        field: 'LastName'
                    },
                    {
                        title: 'gender',
                        value: state.auth.user.Gender__c,
                        field: 'Gender__c'
                    },
                    {
                        title: 'age',
                        value: state.auth.user.Age__c,
                        field: 'Age__c'
                    }
                ]
            },
            {
                title: 'Contact Information',
                data: [
                    {
                        title: 'language(s)',
                        value: state.auth.user.Language_s_Spoken__c.split(";").join(" \u2022 "),
                        field: 'Language_s_Spoken__c'
                    },
                    {
                        title: 'preferred contact type',
                        value: state.auth.user.What_is_the_Best_Way_to_Contact_You__c,
                        field: 'What_is_the_Best_Way_to_Contact_You__c'
                    },
                    {
                        title: 'primary email',
                        value: state.auth.user.Primary_Email__c,
                        field: 'Primary_Email__c'
                    },
                    {
                        title: 'alternate email',
                        value: state.auth.user.npe01__AlternateEmail__c,
                        field: 'npe01__AlternateEmail__c'
                    },
                    {
                        title: 'phone',
                        value: formattedPhoneNumber,
                        field: 'Phone'
                    },
                    {
                        title: 'skype id',
                        value: state.auth.user.Skype_ID__c,
                        field: 'Skype_ID__c'
                    }
                ]
            },
            {
                title: 'Work & Education',
                data: [
                    {
                        title: 'position',
                        value: state.auth.user.Position__c,
                        field: 'Position__c'
                    },
                    {
                        title: 'degree(s)',
                        value: state.auth.user.Degree_s__c.split(";").join(' \u2022 '),
                        field: 'Degree_s__c'
                    },
                    {
                        title: 'highest degree',
                        value: state.auth.user.Highest_Degree__c,
                        field: 'Highest_Degree__c'
                    },
                    {
                        title: 'previous cycle',
                        value: state.auth.user.Author_on_Previous_Cycle__c,
                        field: 'Author_on_Previous_Cycle__c'
                    },
                ]
            },
            {
                title: 'Location & Mailing Address',
                data: [
                    {
                        title: 'street',
                        value: state.auth.user.MailingStreet,
                        field: 'MailingStreet'
                    },
                    {
                        title: 'city',
                        value: state.auth.user.MailingCity,
                        field: 'MailingCity'
                    },
                    {
                        title: 'state',
                        value: state.auth.user.MailingState,
                        field: 'MailingState'
                    },
                    {
                        title: 'country',
                        value: state.auth.user.MailingCountry,
                        field: 'MailingCountry'
                    },
                    {
                        title: 'postal code',
                        value: state.auth.user.MailingPostalCode,
                        field: 'MailingPostalCode'
                    }
                ]
            }
        ]
    }
}

export default connect(mapStateToProps)(DetailsView)
