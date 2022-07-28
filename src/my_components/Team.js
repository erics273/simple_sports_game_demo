import React from 'react';

class Team extends React.Component {

    state = {
        numshots: 0,
        score: 0
    }

    handleShoot = (event) => {

        
        this.setState((state) => (
            {
                numshots: state.numshots + 1
            }
        ))

        if(Math.random() > .5){
            this.setState((state) => (
                {
                    score: state.score + 1
                }
            ))
        }
        
    }

    render(){
        return (
            <div className='Team'>
                <div>Team Name: {this.props.teamName}</div>
                <div>Team Shots: {this.state.numshots}</div>
                <div>Team Score: {this.state.score}</div>
                <div><button onClick={this.handleShoot}>Shoot</button></div>
            </div>
        )
    }

}

export default Team;