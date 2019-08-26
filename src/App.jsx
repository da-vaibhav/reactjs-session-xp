import React, { Component } from "react";
import "./App.css";
import FunctionChild  from "./fn-child";
import ClassChild from "./class-child";
import ChildrenProps from "./children-props";

class App extends Component {
  render() {
    return (
      <div>
        <FunctionChild functionName="child function"/>
        <hr/>
        <ClassChild name="class component"/>
        <hr/>
        <ChildrenProps>
          <b>this one</b>
        </ChildrenProps>

      </div>
    );
  }
}

export default App;
