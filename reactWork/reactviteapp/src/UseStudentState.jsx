import React, { useState } from 'react'

function UseStudentState() {
    const  [count,setCount]=useState(20);
  function doIncrement(){
    console.log("hi inside");
    setCount(count+1);
  }
  function doDecrement(){
    console.log("hi inside");
    setCount(count-1);
  }
  return (
    <div style={{color:'red',border:'2px solid red',height:'400px',width:'200px',margin:'30px',padding:'20px',fontSize:'90px'}}>{count}
    <div>
      <button onClick={doIncrement}>Increment counter</button>
      <button onClick={doDecrement}>Decrement counter</button>
    </div>
    </div>
  )
}

export default UseStudentState