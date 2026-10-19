import React, { useState, useRef, useEffect } from 'react'
import useTaskStore from '../store/taskStore'
import { EditIcon, TrashIcon, CheckIcon } from './Icons'
import '../styles/TaskItem.css'

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)
  const inputRef = useRef(null)

  const editTask = useTaskStore((state) => state.editTask)
  const deleteTask = useTaskStore((state) => state.deleteTask)
  const toggleTask = useTaskStore((state) => state.toggleTask)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const handleEdit = () => {
    setIsEditing(true)
    setEditValue(task.title)
  }

  const handleSave = () => {
    const trimmedValue = editValue.trim()
    if (trimmedValue && trimmedValue !== task.title) {
      editTask(task.id, trimmedValue)
    }
    setIsEditing(false)
    setEditValue(task.title)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditValue(task.title)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const handleToggle = () => {
    if (!isEditing) {
      toggleTask(task.id)
    }
  }

  const handleDelete = () => {
    deleteTask(task.id)
  }

  return (
    <div className={`task-item ${task.completed ? 'task-item-completed' : ''}`}>
      <div className="task-checkbox-wrapper">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={handleToggle}
          id={`task-${task.id}`}
          aria-label={task.completed ? 'إلغاء إنجاز المهمة' : 'إنجاز المهمة'}
        />
        <label htmlFor={`task-${task.id}`} className="checkbox-label">
          {task.completed && <CheckIcon size={14} className="checkmark" />}
        </label>
      </div>

      {isEditing ? (
        <div className="task-edit-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="task-edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="تعديل المهمة"
          />
          <div className="task-edit-actions">
            <button
              className="task-button task-button-save"
              onClick={handleSave}
              aria-label="حفظ التعديل"
            >
              حفظ
            </button>
            <button
              className="task-button task-button-cancel"
              onClick={handleCancel}
              aria-label="إلغاء التعديل"
            >
              إلغاء
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="task-content">
            <span className={`task-title ${task.completed ? 'task-title-completed' : ''}`}>
              {task.title}
            </span>
          </div>

          <div className="task-actions">
            <button
              className="task-button task-button-edit"
              onClick={handleEdit}
              aria-label="تعديل المهمة"
              title="تعديل"
            >
              <EditIcon size={16} />
            </button>
            <button
              className="task-button task-button-delete"
              onClick={handleDelete}
              aria-label="حذف المهمة"
              title="حذف"
            >
              <TrashIcon size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskItem
