import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

import EditModal from '../../components/EditModal'
import { openModal, closeModal, updateContactData } from '../../redux/actions'

class AffiliationsView extends Component {
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

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        metaData: state.auth.metaData,
        isEditModalOpen: state.auth.isEditModalOpen,
        modalTitle: state.auth.modalTitle,
        modalData: state.auth.modalData,
        cards: [
            {
                title: 'Primary Affiliation',
                data: [
                    {
                        title: 'name',
                        value: 'The Bill and Melinda Gates Foundation'
                    },
                    {
                        title: 'department',
                        value: state.auth.user.Primary_Affiliation_Department__c,
                        name: 'Primary_Affiliation_Department__c'
                    },
                    {
                        title: 'address',
                        value: state.auth.user.Primary_Affiliation_Street_Address__c,
                        name: 'Primary_Affiliation_Street_Address__c'
                    },
                    {
                        title: 'city',
                        value: state.auth.user.Primary_Affiliation_City__c,
                        name: 'Primary_Affiliation_City__c'
                    },
                    {
                        title: 'state or province',
                        value: state.auth.user.Primary_Affiliation_State_or_Province__c,
                        name: 'Primary_Affiliation_State_or_Province__c'
                    },
                    {
                        title: 'country',
                        value: state.auth.user.Primary_Affiliation_Country__c,
                        name: 'Primary_Affiliation_Country__c'
                    }
                ]
            },
            {
                title: 'Secondary Affiliation',
                data: [
                    {
                        title: 'name',
                        value: "University of Washington"
                    },
                    {
                        title: 'department',
                        value: state.auth.user.Secondary_Affiliation_Department__c,
                        name: 'Secondary_Affiliation_Department__c'
                    },
                    {
                        title: 'address',
                        value: state.auth.user.Secondary_Affiliation_Street_Address__c,
                        name: 'Secondary_Affiliation_Street_Address__c'
                    },
                    {
                        title: 'city',
                        value: state.auth.user.Secondary_Affiliation_City__c,
                        name: 'Secondary_Affiliation_City__c'
                    },
                    {
                        title: 'state or province',
                        value: state.auth.user.Secondary_Affiliation_State_or_Province__c,
                        name: 'Secondary_Affiliation_State_or_Province__c'
                    },
                    {
                        title: 'country',
                        value: state.auth.user.Primary_Affiliation_Country__c,
                        name: 'Primary_Affiliation_Country__c'
                    }
                ]
            }
        ]
    }
}


export default connect(mapStateToProps)(AffiliationsView)
