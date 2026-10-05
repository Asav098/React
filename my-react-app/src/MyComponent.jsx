import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("GUEST");
    const [age,setAge] = useState(0);
    const [isEmployed,setisEmployed] = useState(false);
    const updateName = ()=>{
        setName("Bajaarala");
    }
    const incage = ()=>{
        setAge(age + 1);
    }
    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age} </p>
            <button onClick={incage}>Increment age</button>

            <p>Is employed? : {isEmployed ? "Yes": "No"} </p>
            <button onClick={toggleEmployedStatus}>Employed or not?</button>

        </div>
    )

}
export default MyComponent