import React, {useState} from 'react'
function Todolist(){
    const [tasks,setTasks]= useState(["Eat Breakfast","Take Shower"]);
    const [newTask,setnewTasks] = useState('');
    function handleInputChange(event){
        setnewTasks(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
           setTasks(t=>[...t,newTask])
            setnewTasks("") 
        }
        

    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>i !== index))
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
         if(index< tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    return(<div className="to-do-list">
        <h1>To-Do-list</h1>
        <div>
            <input
            type="text"
            placeholder="Enter a text...."
            value={newTask}
            onChange={handleInputChange}
            />
            <button
            className="add-button"
            onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}><span className="text">{task}</span>
            <button className="delete-button" onClick={()=> deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={()=> moveTaskUp(index)}>Up</button>
            <button className="move-button" onClick={()=> moveTaskDown(index)}>Down</button>
            </li>)}
        </ol>
    </div>)
}
export default Todolist