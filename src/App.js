import React, {useState} from "react";
import "./style.css";

export default function App() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {()=> setCount(count+1)}>increase the count</button>
    </div>
  );
}
