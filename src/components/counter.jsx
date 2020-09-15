import React, { Component } from "react";
// import Button from "react-bootstrap/Button";

class Counter extends Component {
  state = {
    // state object includes any data that the component needs
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // ---------------  we can use either the constructor with the handleIncrement below  or
  //                   then handleIncremnt arrow function

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }

  // event handler
  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  // event handler controlled component

  // -----------------------------------------------------------------------------------

  render() {
    // console.log("props: ", this.props);
    let classes = this.getBadgeClasses();

    return (
      <div>
        <h1> This is the id: {this.props.counter.id} </h1>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;

    // const { count } = this.state;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
