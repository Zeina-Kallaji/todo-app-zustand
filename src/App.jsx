import React, { useState } from 'react'
import Header from './components/Header'
import TaskStats from './components/TaskStats'
import TaskInput from './components/TaskInput'
import TaskTabs from './components/TaskTabs'
import TaskList from './components/TaskList'
import ClearCompletedButton from './components/ClearCompletedButton'
import useTaskStore from './store/taskStore'
import './styles/App.css'

function App() {
  const [activeTab, setActiveTab] = useState('all')

  const tasks = useTaskStore((state) => state.tasks)

  const getFilteredTasks = () => {
    switch (activeTab) {
      case 'completed':
        return tasks.filter((task) => task.completed)
      case 'incomplete':
        return tasks.filter((task) => !task.completed)
      default:
        return tasks
    }
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="app">
      <div className="container">
        <Header />
        <TaskStats />
        <TaskInput />
        <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <TaskList tasks={filteredTasks} activeTab={activeTab} />
        <ClearCompletedButton />
      </div>
    </div>
  )
}

export default App
