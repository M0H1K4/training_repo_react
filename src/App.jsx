import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import axios from 'axios'

function App() {

  const [time, setTime] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)

      return () => clearInterval(interval)

    })



  return (
    <>

      {/* <div className="board-row">
        <Square value/>
        <Square value/>
        <Square value/>
      </div>
      <div className="board-row">
        <Square value='4'/>
        <Square value='5'/>
        <Square value='6'/>
      </div>
      <div className="board-row">
        <Square value='7'/>
        <Square value='8'/>
        <Square value='9'/>
      </div> */}
    <h1>time: {time}</h1>
    
    
    </>
  );
}

export default App;


// function Square({value}){

//   const [value, setValue] = useState(null)

//   function handleClick(){
//     console.log('clicked!');
//   }
//   return  <button onClick={handleClick} className="square">{value}</button>
// }