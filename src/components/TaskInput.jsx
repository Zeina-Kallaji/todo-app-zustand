import React, { useState } from 'react'
import useTaskStore from '../store/taskStore'
import { PlusIcon } from './Icons'

function TaskInput() {
  const [inputValue, setInputValue] = useState('')
  const addTask = useTaskStore((state) => state.addTask)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTask(inputValue)
      setInputValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="task-input"
          placeholder="أضف مهمة جديدة..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="إضافة مهمة جديدة"
        />
        <button type="submit" className="add-task-button" aria-label="إضافة مهمة">
          <PlusIcon size={20} />
          <span className="button-text">إضافة</span>
        </button>
      </div>
    </form>
  )
}

export default TaskInput
