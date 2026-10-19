import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: [],

      addTask: (title) => {
        const trimmedTitle = title.trim()
        if (!trimmedTitle) return

        const newTask = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          title: trimmedTitle,
          completed: false,
          createdAt: new Date().toISOString(),
        }

        set((state) => ({
          tasks: [newTask, ...state.tasks],
        }))
      },

      editTask: (id, newTitle) => {
        const trimmedTitle = newTitle.trim()
        if (!trimmedTitle) return

        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title: trimmedTitle } : task
          ),
        }))
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }))
      },

      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }))
      },

      clearCompleted: () => {
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed),
        }))
      },

      // Getters
      getTotalCount: () => get().tasks.length,
      getCompletedCount: () => get().tasks.filter((task) => task.completed).length,
      getIncompleteCount: () => get().tasks.filter((task) => !task.completed).length,
    }),
    {
      name: 'todo-app-storage-v1',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useTaskStore
