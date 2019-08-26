import React, { Component } from "react";
import "./App.css";
import FunctionChild  from "./fn-child";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <FunctionChild />
        <hr/>
      </div>
    );
  }
}

export default App;
