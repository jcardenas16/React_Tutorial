import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  // handleDelete = (counterId) => {
  //   console.log("Event handler Called", counterId);
  //   const counters = this.state.counters.filter((c) => c. id !== counterId);
  //   this.setState({ counters: counters });
  // };

  // handleIncrement = (counter) => {
  //   // creates a new array of counters
  //   const newArrayCounters = [...this.state.counters];

  //   // returns the position of the counter (passed in) within the counters
  //   const index = newArrayCounters.indexOf(counter);

  //   // newArrayCounters is assigned a clone object of the passed in object - mosh
  //   newArrayCounters[index] = { ...counter };

  //   // increment the value
  //   newArrayCounters[index].value++;

  //   this.setState({ counters: newArrayCounters });
  // };

  //   // ---------------------- what had been before
  //   <div>
  //   <button
  //     onClick={this.props.onReset}
  //     className="btn btn-primary btn-sm m-2"
  //   >
  //     Reset
  //   </button>
  //   {this.props.counters.map((counter) => (
  //     <Counter
  //       key={counter.id}
  //       onDelete={this.props.onDelete}
  //       onIncrement={this.props.onIncrement}
  //       counter={counter}
  //     />
  //   ))}
  // </div>
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
