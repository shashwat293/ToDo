import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import SearchBar from './SearchBar';
import AddTaskForm from './AddTaskForm';
import tasksData from '../data/tasks.json';

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <AddTaskForm onAddTask={handleAddTask} />
      <ul>
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateTask={handleUpdateTask}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
