import React, { Component } from "react";
import { TodoContext } from "../context.api";
import "./Todo.css";
export class Todo extends Component {
  static contextType = TodoContext;
  constructor(params) {
    super(params);
    this.handleonChange = this.handleonChange.bind(this);
    this.handleDeletetodo = this.handleDeletetodo.bind(this);
    this.state = {
      isChecked: false,
    };
  }

  handleonChange() {
    this.setState((prevState) => {
      return { ...prevState, isChecked: !prevState.isChecked };
    });
  }
  handleDeletetodo() {
    if (this.state.isChecked) {
      this.context.deleteTodo(this.props.id);
    } else {
      alert("you cant delete with out checked ❌❌❌..");
    }
  }
  render() {
    return (
      <div className="Todo">
        <h2 className={this.state.isChecked ? "text ischecked" : "text"}>
          {this.props.no} 👉 {this.props.text}
        </h2>
        <input type="checkbox" onChange={this.handleonChange} />
        <button onClick={this.handleDeletetodo}>delete</button>
      </div>
    );
  }
}

export default Todo;
