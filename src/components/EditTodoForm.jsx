import React,{useState} from 'react'

function EditTodoForm({editTask,task}) {
  const[value,setValues]=useState(task.task)
  const handleSubmit = (e)=>{
    e.preventDefault();
    editTask(value,task.id)
  }
  return (
    <form className='TodoForm'  onSubmit={handleSubmit} >
      <input 
      type="text"
      value={value}
      onChange={(e)=>setValues(e.target.value)} 
      className='todo-input'
      placeholder='Update Task'
      />
      <button type='submit' className='todo-btn'>Done</button>

    </form>
  )
}

export default EditTodoForm
