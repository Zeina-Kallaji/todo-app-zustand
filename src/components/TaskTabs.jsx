import React from 'react'
import useTaskStore from '../store/taskStore'

function TaskTabs({ activeTab, setActiveTab }) {
  const tasks = useTaskStore((state) => state.tasks)

  const allCount = tasks.length
  const incompleteCount = tasks.filter((task) => !task.completed).length
  const completedCount = tasks.filter((task) => task.completed).length

  const tabs = [
    { id: 'all', label: 'الكل', count: allCount },
    { id: 'incomplete', label: 'غير المنجزة', count: incompleteCount },
    { id: 'completed', label: 'المنجزة', count: completedCount },
  ]

  return (
    <div className="task-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'tab-button-active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
          aria-label={`عرض ${tab.label}`}
          aria-pressed={activeTab === tab.id}
        >
          <span className="tab-label">{tab.label}</span>
          <span className="tab-count">{tab.count}</span>
        </button>
      ))}
    </div>
  )
}

export default TaskTabs
