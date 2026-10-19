import React from 'react'
import useTaskStore from '../store/taskStore'
import { TrashIcon } from './Icons'

function ClearCompletedButton() {
  const clearCompleted = useTaskStore((state) => state.clearCompleted)
  const getCompletedCount = useTaskStore((state) => state.getCompletedCount)

  const completedCount = getCompletedCount()

  const handleClearCompleted = () => {
    if (completedCount === 0) return

    const confirmed = window.confirm(
      `هل أنت متأكد من حذف ${completedCount} مهمة منجزة؟`
    )

    if (confirmed) {
      clearCompleted()
    }
  }

  return (
    <div className="clear-completed-wrapper">
      <button
        className="clear-completed-button"
        onClick={handleClearCompleted}
        disabled={completedCount === 0}
        aria-label="حذف المهام المنجزة"
      >
        <TrashIcon size={16} />
        <span className="button-text">
          حذف المهام المنجزة {completedCount > 0 && `(${completedCount})`}
        </span>
      </button>
    </div>
  )
}

export default ClearCompletedButton
