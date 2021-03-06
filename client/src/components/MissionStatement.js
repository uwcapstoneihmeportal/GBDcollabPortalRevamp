import React, { Component } from 'react';

// Style
const StatementStyle = {
    background: 'rgba(38, 161, 70, 0.8)',
    color: 'white',
    padding: "30px 50px 30px 50px",
    marginTop: '-70px',
    width: '60%',
    position: 'relative'
}

// Component
class MissionStatement extends Component {
    render() {
        return (
            <div className="d-none d-md-block" style={StatementStyle}>
                <h2>
                    Measuring what matters
                </h2>
                <p>
                    Our mission is to improve the health of the world's populations
                    by providing the best information on population health
                </p>
            </div>
        )
    }
}

export default MissionStatement
