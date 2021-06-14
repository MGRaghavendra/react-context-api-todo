import React, { Component } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context.api";
import "./Todolist.css";
export class Todolist extends Component {
  render() {
    return (
      <div className="Todo--list">
        <TodoContext.Consumer>
          {(context) => {
            return context.state.todos.map((todo, index) => (
              <Todo key={index} text={todo.text} id={todo.id} no={index + 1} />
            ));
          }}
        </TodoContext.Consumer>
      </div>
    );
  }
}

export default Todolist;
