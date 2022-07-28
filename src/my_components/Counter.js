import React from 'react';

class Counter extends React.Component{
    
    state = {
        counter: this.props.counterStart || 0
    }

    incrementButtonClicked = (event) => {

        if(this.state.counter <= 20){
            this.setState((state, props) => (
                {
                    counter: state.counter + 1
                }
            ))
        }

    }

    decrementButtonClicked = (event) => {

        if(this.state.counter > 0){
            this.setState((state, props) => (
                {
                    counter: state.counter - 1
                }
            ))
        }

    }

    render() {
        
        return (
            <div className="Counter">
                <button onClick={this.decrementButtonClicked}>-</button> 
                {this.state.counter} 
                <button onClick={this.incrementButtonClicked}>+</button>
            </div>
        )
    }

}

export default Counter;