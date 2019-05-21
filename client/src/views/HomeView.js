import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Components
import NavigationBar from '../components/NavigationBar'
import MissionStatement from '../components/MissionStatement'
import tableau from 'tableau-api'

class HomeView extends Component {
    componentDidMount() {  
        this.initViz()  
    }  

    initViz() {  
        const vizUrl = 'https://public.tableau.com/views/Test_15580954904920/Sheet1?:embed=y&:display_count=yes&publish=yes&:toolbar=no&:origin=viz_share_link';  
        const vizContainer = this.vizContainer;  
        let viz = new window.tableau.Viz(vizContainer, vizUrl)  
    }  

    render() {
        const { isAuthenticated } = this.props
        
        // If user is not authenticated, then redirect to sign in
        // if (!isAuthenticated) {
        //     return (<Redirect to='/' /> )
        // }

        return (
            <div>
                <NavigationBar />
                <div style={{
                    backgroundColor: '#ADD8E6',
                    height: '300px'}}>
                </div>
                <MissionStatement />
                <Container>
                    <Row>
                        <Col sm="12">
                            <h4 style={{ marginTop: '30px', marginBottom: '15px' }}>Welcome to the GBD Collaborator Portal!</h4>
                            <p>
                                GBD collaborators are crucial for the production, analysis, and improvement of the Global Burden of Disease. 
                                We’ve put together this page of information and resources for members of the Global Burden of Disease collaborative network.
                            </p>     
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <div ref={(div) => { this.vizContainer = div }}>  </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

// Redux
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(HomeView)
