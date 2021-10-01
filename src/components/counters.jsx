import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    render() { 
        console.log("props value", this.props)
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                <Counter 
                    key={counter.id}
                    value={counter.value}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    counter={counter}
                    />
                ))}
            </div>
        );
    }
}
 
export default Counters;