import React, { Component } from "react";
import "./App.css";
import Todoapp from "./components/Todoapp";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Todoapp />
      </div>
    );
  }
}
