import React, { Component } from "react";
import "./App.css";
import MasterDetail  from "./components/Master_Detail";
import CountContext from "./countContext.js";

class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <CountContext.Provider value={{count: this.state.count, incrementCount: this.incrementCount}}>
          <MasterDetail />
        </CountContext.Provider>
      </div>
    );
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1});
  }
}

export default App;
