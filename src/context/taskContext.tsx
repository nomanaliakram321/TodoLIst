// TaskContext.tsx

import React, {createContext, useState, useEffect} from 'react';
import {Task} from '../types';
import {storage} from '../utils/helper.ts';
interface TaskContextType {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  toggleTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
});

export const TaskProvider = ({children}: any) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const saveTasks = async () => {
    try {
      storage.set('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = storage.getString('tasks');
      if (savedTasks != null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const addTask = (newTask: Task) => {
    console.log('task.', newTask);
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId: number) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{tasks, addTask, toggleTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};
