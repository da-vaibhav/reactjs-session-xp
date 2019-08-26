import React from "react";

export default function FunctionChild (props) {
  return(
    <div>
      <h3>current number is => {props.num}</h3>
      {
        props.clickEvent
        ? <button onClick={props.clickEvent}>update number from children</button>
        : null
      }
    </div>
  )
}
