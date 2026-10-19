import React from 'react'
import TaskItem from './TaskItem'
import EmptyState from './EmptyState'

function TaskList({ tasks, activeTab }) {
  if (tasks.length === 0) {
    return <EmptyState activeTab={activeTab} />
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
