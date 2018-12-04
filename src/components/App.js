import React, { Component } from "react";
import "../App.css";

import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    inputValue: "",
    todos: [
      { value: "clean the kitchen", done: false },
      { value: "wash the car", done: true }
    ]
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  handleClick = index => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, inputValue: "" });
  };

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List handleClick={this.handleClick} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
