import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* this is a list of counter component bellow but we can set by state array rather than copy and paste 
        multiple time <counter> we can add id for create uniqueness for each counter component */}
        {/* <Counter></Counter>   
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter> */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} //is only used internaly by react its not our concern
            // value={counter.value}         // insted of this we can directly pass counter state obj
            // id={counter.id}             // bcz after some time we need to add more props so we can directly used from counters obj
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            {/* <h5>Counter #{counter.id}</h5> */}
          </Counter>
        ))}
      </div>
    );
  }
  handleIncrement = counter => {
    //... is spread operater. we cloning this counters array. return new array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //   now we have to update specific obj which we pass in argument
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // in normal function "this" is undefined so we use arrow function ()=>
    //this.setState({ value: this.state.value + 1 }); //we can not directly set value we use setState function
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    //in react we do not update the state directly
    let counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: counters });
    console.log("event handled called", counterId);
  };
}

export default Counters;
