import React,{useState}from 'react'

function Counter() {
  const[count,SetCount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> SetCount(count+1)}>arttır</button>
    </div>
  ) 
}

export default Counter;
