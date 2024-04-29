import React, { useState } from 'react'

const Todo = () => {
  const[task,setTask]=useState("")
  const[todo,setTodo]=useState([])

  const handleChange=(e)=>{
     setTask(e.target.value)
  }
  const handleClick=(e)=>{
      setTodo([...todo,task])
  }
  return (
    <div style={{marginLeft:"630px"}}>
      <h1>Todo App</h1>
        <input type="text"  placeholder='Enter Something' onChange={handleChange} value={task}/>
        <button onClick={handleClick}>Click</button>
        {todo.map((ele)=>{
           return <h1>{ele}</h1>
        })}
    </div>
  )
}

export default Todo