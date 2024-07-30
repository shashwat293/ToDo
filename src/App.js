import React from 'react';
import TaskList from './components/TaskList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskList />
    </div>
  );
};

export default App;
