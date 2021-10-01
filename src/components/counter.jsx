import React, { Component } from "react";

class Counter extends React.Component {
//   state = {
//     count: this.props.counter.value,
//     tags: ["tag1", "tag2", "tag3"],
//   };

//   constructor(){
//       super();
//       this.handleIncement = this.handleIncement.bind(this);
//   }
  render() {
      console.log("props in counter", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>tag</li>
          ))}
        </ul> */}
        <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge p-2 m-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
//   handleIncement(){
//     console.log("increment clicked", this)
//   }

// handleIncement = () =>{
//     console.log("increment clicked", this)
//     this.setState({count: this.state.count + 1});
// }

}
export default Counter;
