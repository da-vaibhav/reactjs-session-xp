import React, { Component } from "react";
import "./App.css";
const HelloWorld = (<span>Hello World!</span>);

class App extends Component {
  render() {
    return (
      <div>
        {HelloWorld}
      </div>
    );
  }
}

export default App;
