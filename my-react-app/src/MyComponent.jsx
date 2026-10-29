
import React, {useState, useEffect,useRef} from 'react'; 


function MyComponent(){
    const inputref1= useRef(null);
    const inputref2= useRef(null);
    const inputref3= useRef(null);

    
    useEffect(()=>{
        console.log("Component rendered!");
        
    });
    function handleClick1(){
        inputref1.current.focus();

        inputref1.current.style.backgroundColor = "gold";
        inputref2.current.style.backgroundColor = "";
        inputref3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputref2.current.focus();
        inputref1.current.style.backgroundColor = "";
        inputref2.current.style.backgroundColor = "gold";
        inputref3.current.style.backgroundColor = "";
    };
    function handleClick3(){
        inputref3.current.focus();
        inputref1.current.style.backgroundColor = "";
        inputref2.current.style.backgroundColor = "";
        inputref3.current.style.backgroundColor = "gold";
        
    }

    return(
        <>
        
        <button onClick={handleClick1}> Click Me!! 1  </button>
        <input ref={inputref1}/>
        <button onClick={handleClick2}> Click Me!! 2  </button>
        <input ref={inputref2}/>
        <button onClick={handleClick3}> Click Me!! 3 </button>
        <input ref={inputref3}/>
        </>
    )

}
export default MyComponent