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
    console.log(state)

    return {
        cards: [
            {
                title: 'GBD 2017',
                data: [
                    {
                        title: 'authorship form sent',
                        value: state.auth.user.GBD_2017_Capstone_Authorship_Form__c.split(";")
                    },
                    {
                        title: 'authored on',
                        value: state.auth.user.GBD_2017_Capstone_Authorship__c.split(";")
                    },
                ]
            }
        ]
    }
}


export default connect(mapStateToProps)(AuthorshipView)
