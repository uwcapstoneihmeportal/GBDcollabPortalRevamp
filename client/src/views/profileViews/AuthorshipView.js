import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

import EditModal from '../../components/EditModal'
import { openModal, closeModal, updateContactData } from '../../redux/actions'

class AuthorshipView extends Component {
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
                title: 'GBD 2017',
                data: [
                    {
                        title: 'authorship form sent',
                        value: state.auth.user.GBD_2017_Capstone_Authorship_Form__c.split(";"),
                        name: 'GBD_2017_Capstone_Authorship_Form__c'
                    },
                    {
                        title: 'authored on',
                        value: state.auth.user.GBD_2017_Capstone_Authorship__c.split(";"),
                        name: 'GBD_2017_Capstone_Authorship__c'
                    },
                ]
            }
        ]
    }
}

export default connect(mapStateToProps)(AuthorshipView)
