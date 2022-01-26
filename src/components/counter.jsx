import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (id) => {
    console.log("Incerement Clicked",id);
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className="w3-badge w3-green">
          {this.state.count}
        </span>
        <button onClick={() => this.handleIncrement({id:1})}>Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
