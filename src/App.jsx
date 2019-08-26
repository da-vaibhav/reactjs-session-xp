import React, { Component } from "react";
import "./App.css";
import List  from "./components/List";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <List />
        <hr/>
      </div>
    );
  }
}

export default App;
