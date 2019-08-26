import React, { useState } from "react";
import "./App.css";

function App (){
  const [count, setCount] = useState(0);

    return (
      <div>
        count is {count}
        <hr/>
        <button onClick={(e) => {
          setCount(count + 4);
        }}>increment</button>
      </div>
    );
}

export default App;
