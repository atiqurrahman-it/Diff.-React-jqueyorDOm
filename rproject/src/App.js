import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Increment></Increment>
      <Increment></Increment>
    </div>
  );
}

function Increment(){
  // style for button 
  var syleButton={
    color: 'whitesmoke',
    backgroundColor: '#2492fb',
    border: 'wheat',
    width: '100px',
    height: '26px',
    // fontSize: 'unset',
  }
  // counter handel 
  const [count,setCount]=useState(0)
  
  //create functon for increment for incement 
  let IncrementHandal= ()=>{
    setCount(count+1)
  }

  return(
    <div>
      <h1>{count}</h1>
      <button style={syleButton} onClick={IncrementHandal}> Increment + </button> &nbsp;
      {/* decremenet er jonno alada vabe function create kori nai  onClick er modde likhe diye chi function  */}
      <button style={syleButton} onClick={()=>setCount(count-1)}> Decrement - </button>

    </div>
  )
}

export default App;
