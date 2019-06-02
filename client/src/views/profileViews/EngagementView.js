import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../../components/CardContainer'

import EditModal from '../../components/EditModal'
import { openModal, closeModal, updateContactData } from '../../redux/actions'

class EngagementViews extends Component {
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
                title: 'Role & Interests',
                data: [
                    {
                        title: 'how would you like to interact?',
                        value: state.auth.user.How_Would_You_Like_to_Interact__c.split(";").join(" \u2022 "),
                        name: 'How_Would_You_Like_to_Interact__c'
                    },
                    {
                        title: 'your involvement',
                        value: state.auth.user.GBD_Data_Collaboration_Involvement__c.split(";").join(" \u2022 "),
                        name: 'GBD_Data_Collaboration_Involvement__c'
                    },
                    {
                        title: 'present, teach, show, or discuss?',
                        value: state.auth.user.Do_You_Present_Teach_Show_or_Discuss__c.split(";").join(" \u2022 "),
                        name: 'Do_You_Present_Teach_Show_or_Discuss__c'
                    },
                    {
                        title: 'regularly used tools',
                        value: state.auth.user.Regularly_Used_IHME_Tools__c.split(";").join(" \u2022 "),
                        name: 'Regularly_Used_IHME_Tools__c'
                    }
                ]
            },
            {
                title: 'Engagement',
                data: [
                    {
                        title: 'how did you hear about the gbd network?',
                        value: state.auth.user.How_Did_You_Hear_About_the_Network__c.split(";").join(" \u2022 "),
                        name: 'How_Did_You_Hear_About_the_Network__c'
                    },
                    {
                        title: 'gdb 2019 participation',
                        value: state.auth.user.GBD_2019_Participation__c,
                        name: 'GBD_2019_Participation__c'
                    },
                    {
                        title: 'policy engagement',
                        value: state.auth.user.Policy_Engagement__c.split(";").join(" \u2022 "),
                        name: 'Policy_Engagement__c'
                    },
                    {
                        title: 'which gbd activity or event?',
                        value: state.auth.user.Which_GBD_Activity_or_Event__c.split(";").join(" \u2022 "),
                        name: 'Which_GBD_Activity_or_Event__c'
                    }
                ]
            }
        ]
    }
}


export default connect(mapStateToProps)(EngagementViews)
