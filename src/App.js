import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters.jsx";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props); // calls the constuctor of the parent class
    console.log("App - Constructor");

    // ----------------------------------
    // Set states directly instead of using the setState

    // Correct
    // this.state = this.props.something

    // Incorrect - the setState can only be called when a component is rendered and placed on the DOM
    //  this.setState{}
  }

  // mosh - method is called after our component is rendered into the DOM and
  //        and the perfect place to make AJAX calls to get date from the server
  componentDidMount() {
    console.log("App - Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    // creates a new array of counters
    const newArrayCounters = [...this.state.counters];

    // returns the position of the counter (passed in) within the counters
    const index = newArrayCounters.indexOf(counter);

    // newArrayCounters is assigned a clone object of the passed in object - mosh
    newArrayCounters[index] = { ...counter };

    // increment the value
    newArrayCounters[index].value++;

    this.setState({ counters: newArrayCounters });
  };

  // Returns a react element that represents the virtual DOM
  // then React gets that virtual DOM and then render it in the actual
  // browse DOM and then our component is mounted (mounted means on the DOM)
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <React.Fragment>
//       <NavBar />
//       <main className="container">
//         <Counters
//           onReset={this.handleReset}
//           onIncrement={this.handleIncrement}
//           onDelete={this.handleDelete}
//         />
//       </main>
//     </React.Fragment>
//   );
// }

export default App;
