import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./conponents/Card";
import Input from "./conponents/Input";
// import axios from 'axios'

function App() {
  // const [time, setTime] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTime((prevTime) => prevTime + 1)
  //     }, 1000)

  //     return () => clearInterval(interval)

  //   })

  const [number, setNumber] = useState('123 123 123 123 123 ');
  const [cardHolder, setCardHolder] = useState('John Doe')
  // const [data, setData] = useState('09/24')


  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeName = (e) => {
    setCardHolder(e.target.value);
    console.log(e.target.value);
  };
  // const handleChangeData = (e) => {
  //   setData(e.target.value);
  //   console.log(e.target.value);
  // };

  return (
    <>
      <div className="container">
        <Card cardNumber={number} cardHolderName={cardHolder} />
        <div className="right_container_inputs">
        <Input className={'inputs_1'} InputLabel={'Cardholder Name'} type={'text'} placeholder={"e.g. Jane Appleseed"} onChange={handleChangeName}/>
        <Input className={'inputs_2'} InputLabel={'Card Number'} type={'number'} placeholder={'e.g. 1234 5678 9123 0000'}  onChange={handleChangeNumber}  />
          <section className="inputs_2">
            <section className="labels">
              <label htmlFor="Month">EXP.DATE (MM/YY)</label>
              <label htmlFor="CVC">CVC</label>
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
