import React from 'react'
import Input from './Input'
import { useRef } from 'react';
import Modal from './Modal';

const NewProject = ({onAdd, onCancel}) => {
    const modal = useRef()
    const title = useRef();
    const description = useRef();
    const dueDate = useRef()
function handleSave ()
{
const enteredTitle = title.current.value
const enteredDescription = description.current.value
const enteredDueDate = dueDate.current.value

if(enteredDescription.trim()==="" ||enteredDueDate.trim()===""||enteredTitle.trim()==="" )
{
    modal.current.open();
    return;
}

//validation
onAdd({
    title: enteredTitle,
    description: enteredDescription,
    dueDate: enteredDueDate
})
}

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Invalid input</h2>
        <p className='text-stone-700 mb-4'>oops.. looks like you forgit to enter a value </p>
        <p className='text-stone-600 mb-4'>please make sure you provide a valid value for every input feild </p>
    </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <button className='text-stone-800 hover:text-stone-950 hover:bg-red-600 hover:rounded-md hover:px-6 hover:py-2' onClick={onCancel}>cancel</button>
        <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>save</button>
      </menu>
      <div>
        <Input type="text" label="Title" ref={title}/>
        <Input label="Description" ref={description} textArea/>
        <Input type="date" label="Due Date" ref={dueDate}/>
      </div>
    </div>
    </>
  )
}

export default NewProject
