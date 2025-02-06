import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import axios from 'axios'

function App() {
  // const [time, setTime] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTime((prevTime) => prevTime + 1)
  //     }, 1000)

  //     return () => clearInterval(interval)

  //   })

  return (
    <>
      <div className="container">
        <div className="left_container">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            facere corporis saepe molestias, fugiat laudantium ut dicta quam
            voluptatem debitis distinctio! Aliquid similique natus non
            repellendus vitae eveniet vero ad!
          </h1>
        </div>
        <div className="right_container_inputs">
          <section className="inputs_1">
            <label for="name">Cardholder Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="e.g. Jane Appleseed"
            />
          </section>
          <section className="inputs_1">
            <label for="card_number">Card Number</label>
            <input
              type="number"
              name=""
              id="card_number"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </section>
          <section className="inputs_2">
            <section className="labels">
              <label for="Month">EXP.DATE (MM/YY)</label>
              <label for="CVC">CVC</label>
            </section>
            <div className="dates_inputs">
              <input type="number" name="" id="Month" placeholder="MM" />
              <input type="number" name="" id="Year" placeholder="YY" />
              <input type="number" name="" id="CVC" placeholder="e.g. 123" />
            </div>
            <button className="button">CONFIRM</button>
          </section>
        </div>
      </div>
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
