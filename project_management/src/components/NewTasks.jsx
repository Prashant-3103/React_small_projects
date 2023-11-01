import React from 'react'
import { useState } from 'react'

const NewTasks = ({onAdd}) => {

    const [enteredTask, setEnteredTask]= useState("")
function handleChange(e)
{
    setEnteredTask(e.target.value)
}

function handleClick()
{onAdd(enteredTask)
setEnteredTask('')
}

  return (
    <div className='flex items-center gap-4'>

      <input type="text"  className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleChange} value={enteredTask}/>
      <button className='text-stone-700 hover:text-stone-900' onClick={handleClick}>ADD TASKS</button>
    </div>
  )
}

export default NewTasks
