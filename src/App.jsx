import React, { Component } from "react";
import "./App.css";
import FunctionChild  from "./fn-child";

class App extends Component {
  state = {
    childCount: 3,
    randomNum: Math.random(),
  };

  render() {
    const { childCount, randomNum } = this.state;
    return (
      <div>
        <span>we are rendering {childCount} child components</span>
        <FunctionChild num={randomNum} />
        <hr/>
        <FunctionChild num={randomNum} clickEvent={this.updateRandomNum}/>

         {(childCount < 3) ? "Less than 3" : "sufficient count" }

        <hr/>
        <button onClick={this.updateRandomNum}>update random number</button>
        <hr/>
      </div>
    );
  }

  updateRandomNum = () => {
    this.setState({randomNum: Math.random()}, () => {
      console.log('random number updated!');
    });
  }
}

export default App;
