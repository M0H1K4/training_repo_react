import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import axios from 'axios'


function App() {


  const [counter, setCounter] = useState(0);
  const increaseFunction = () => setCounter(counter + 1);

  return (
    <>
    hello
      <p>{counter}</p>
      <button onClick={increaseFunction}>increace button</button>
    </>
  );
}

export default App;
