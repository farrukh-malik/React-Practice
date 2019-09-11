import React, { Component } from "react";

class Counter extends Component {
  //we made this counter component like controlled component so we dont need local state it is controlled by
  //other component via props (single source)
  //   state = {
  //     value: this.props.counter.value
  //     // tags: ["tag1", "tag2", "tag3"]   for creating list
  //     // imageUrl: "https://picsum.photos/200"   //use image in html
  //   };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* we use props.children is if we add h1 or any tags in your component  */}
        {this.props.children}
        {/* <img src={this.state.imageUrl}></img>      use image in html*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //for passing argument we use ()=> before calling function
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

        {/* <ul>
          {this.state.tags.map(tag => (   for creating list
            <li key={tag}> {tag} </li>  
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    //for custom css
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // we get the count from state obj then we can directly use count
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
