import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

import EditModal from '../../components/EditModal'
import { openModal, closeModal, updateContactData } from '../../redux/actions'

class DetailsView extends Component {
    // Open edit modal
    displayEditModal(title, data) {
        this.props.dispatch(openModal(title, data))
    }

    // Close edit modal
    closeModal() {
        this.props.dispatch(closeModal())
    }

    // Updates user info and refreshes data
    updateInfo(state) {
        const metaData = this.props.metaData
        this.props.dispatch(updateContactData(metaData, state))
    }

    render() {
        const { isFetching, isEditModalOpen, cards, modalTitle, modalData } = this.props

        return (
            <div>
                {/* Modal View displayed when editing */}
                <EditModal
                    show={isEditModalOpen}
                    onClose={this.closeModal.bind(this)}
                    onSave={this.updateInfo.bind(this)}
                    title={modalTitle}
                    data={modalData}
                    loading={isFetching}
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

    return {
        isFetching: state.auth.isFetching,
        metaData: state.auth.metaData,
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
                        name: 'Prefix__c'
                    },
                    {
                        title: 'first name',
                        value: state.auth.user.FirstName,
                        name: 'FirstName'
                    },
                    {
                        title: 'last name',
                        value: state.auth.user.LastName,
                        name: 'LastName'
                    },
                    {
                        title: 'gender',
                        value: state.auth.user.Gender__c,
                        name: 'Gender__c'
                    },
                    {
                        title: 'age',
                        value: state.auth.user.Age__c,
                        name: 'Age__c'
                    }
                ]
            },
            {
                title: 'Contact Information',
                data: [
                    {
                        title: 'language(s)',
                        value: state.auth.user.Language_s_Spoken__c.split(";").join(" \u2022 "),
                        name: 'Language_s_Spoken__c'
                    },
                    {
                        title: 'preferred contact type',
                        value: state.auth.user.What_is_the_Best_Way_to_Contact_You__c,
                        name: 'What_is_the_Best_Way_to_Contact_You__c'
                    },
                    {
                        title: 'primary email',
                        value: state.auth.user.Primary_Email__c,
                        name: 'Primary_Email__c'
                    },
                    {
                        title: 'alternate email',
                        value: state.auth.user.npe01__AlternateEmail__c,
                        name: 'npe01__AlternateEmail__c'
                    },
                    {
                        title: 'phone',
                        value: formattedPhoneNumber,
                        name: 'Phone'
                    },
                    {
                        title: 'skype id',
                        value: state.auth.user.Skype_ID__c,
                        name: 'Skype_ID__c'
                    }
                ]
            },
            {
                title: 'Work & Education',
                data: [
                    {
                        title: 'position',
                        value: state.auth.user.Position__c,
                        name: 'Position__c'
                    },
                    {
                        title: 'degree(s)',
                        value: state.auth.user.Degree_s__c.split(";").join(' \u2022 '),
                        name: 'Degree_s__c'
                    },
                    {
                        title: 'highest degree',
                        value: state.auth.user.Highest_Degree__c,
                        name: 'Highest_Degree__c'
                    },
                    {
                        title: 'previous cycle',
                        value: state.auth.user.Author_on_Previous_Cycle__c,
                        name: 'Author_on_Previous_Cycle__c'
                    },
                ]
            },
            {
                title: 'Location & Mailing Address',
                data: [
                    {
                        title: 'street',
                        value: state.auth.user.MailingStreet,
                        name: 'MailingStreet'
                    },
                    {
                        title: 'city',
                        value: state.auth.user.MailingCity,
                        name: 'MailingCity'
                    },
                    {
                        title: 'state',
                        value: state.auth.user.MailingState,
                        name: 'MailingState'
                    },
                    {
                        title: 'country',
                        value: state.auth.user.MailingCountry,
                        name: 'MailingCountry'
                    },
                    {
                        title: 'postal code',
                        value: state.auth.user.MailingPostalCode,
                        name: 'MailingPostalCode'
                    }
                ]
            }
        ]
    }
}

export default connect(mapStateToProps)(DetailsView)
