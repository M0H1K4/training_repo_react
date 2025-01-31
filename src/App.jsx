import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = () => {
    setShowMenu(!showMenu);
  };

  

  return (
    <>
      <div onClick={handleChange}>{showMenu ?  'Hide menu' : 'show Menu'}</div>
      {showMenu && (
        <ul className="class">
          <li>menu</li>
          <li>123123</li>
          <li>12312</li>
          <li>31231</li>
          <li>2312</li>
        </ul>
      )}
    </>
  );
}

export default App;
