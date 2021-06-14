import React, { Component } from "react";
import "./Todoapp.css";
import Todolist from "./Todolist";
import { TodoContext } from "../context.api";
export class Todoapp extends Component {
  state = {
    text: "",
  };
  handleOnChange = (e) => {
    this.setState((preveState) => {
      return {
        ...preveState,
        text: e.target.value,
      };
    });
  };

  handleAdd = () => {
    if (!this.state.text) {
      alert("you cannot add empty todo  ❌❌❌..");
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          text: "",
        };
      });
      return {
        text: this.state.text,
        id: Date.now(),
      };
    }
  };

  render() {
    return (
      <div className="Todoapp">
        <div className="Todoapp--header">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
            placeholder="Enter first todo thing"
          />
          <TodoContext.Consumer>
            {(context) => {
              context.state = {
                ...context.state,
              };
              return (
                <>
                  <button onClick={() => context.addtodo(this.handleAdd())}>
                    Add
                  </button>
                  <button onClick={() => context.deleteAll()}>
                    Delete All
                  </button>
                </>
              );
            }}
          </TodoContext.Consumer>
        </div>
        <Todolist />
      </div>
    );
  }
}

export default Todoapp;
