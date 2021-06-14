import React from "react";
const TodoContext = React.createContext();
export default class TodoProvider extends React.Component {
  state = {
    todos: [],
  };

  addtodo = (todo) => {
    if (todo) {
      this.setState((prevState) => {
        return {
          ...prevState,
          todos: [...prevState.todos, todo],
        };
      });
    }
  };

  deleteAll = () => {
    this.setState((prevState) => {
      return { ...prevState, todos: [] };
    });
  };

  deleteTodo = (id) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        todos: [...prevState.todos.filter((todo) => todo.id !== id)],
      };
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          state: this.state,
          addtodo: this.addtodo,
          deleteAll: this.deleteAll,
          deleteTodo: this.deleteTodo,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export { TodoContext };
