import React,{ useEffect,useState,useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Compo1 from './Compo1';
import A from './A';

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
          <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export default App;
