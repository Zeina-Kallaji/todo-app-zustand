import React from 'react'
import useTaskStore from '../store/taskStore'
import { ListIcon, CheckCircleIcon, ClockIcon } from './Icons'

function TaskStats() {
  const getTotalCount = useTaskStore((state) => state.getTotalCount)
  const getCompletedCount = useTaskStore((state) => state.getCompletedCount)
  const getIncompleteCount = useTaskStore((state) => state.getIncompleteCount)

  const total = getTotalCount()
  const completed = getCompletedCount()
  const incomplete = getIncompleteCount()

  return (
    <div className="task-stats">
      <div className="stat-card">
        <div className="stat-icon">
          <ListIcon size={20} />
        </div>
        <div className="stat-info">
          <div className="stat-value">{total}</div>
          <div className="stat-label">إجمالي المهام</div>
        </div>
      </div>

      <div className="stat-card stat-card-completed">
        <div className="stat-icon">
          <CheckCircleIcon size={20} />
        </div>
        <div className="stat-info">
          <div className="stat-value">{completed}</div>
          <div className="stat-label">المنجزة</div>
        </div>
      </div>

      <div className="stat-card stat-card-incomplete">
        <div className="stat-icon">
          <ClockIcon size={20} />
        </div>
        <div className="stat-info">
          <div className="stat-value">{incomplete}</div>
          <div className="stat-label">المتبقية</div>
        </div>
      </div>
    </div>
  )
}

export default TaskStats
