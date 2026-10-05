import React,{useState} from 'react'
function Counter(){
 const [count,setcount] = useState(0);
 const increment = ()=>{
    setcount(count+1);
 }
  const decrement = ()=>{
    setcount(count-1);
 }
 const reset = ()=>{
    setcount(0);
 }

 return(
    <div className="Countercont">
        <p className="countdisplay">{count}</p>
        <button className="countbut" onClick={decrement}>Decrease</button>

        <button className="countbut" onClick={reset}>Reset</button>
        <button className="countbut" onClick={increment}>Increase</button>
    </div>
 )
}
export default Counter