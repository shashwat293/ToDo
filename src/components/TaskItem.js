import React, { useState } from 'react';

const TaskItem = ({ task, onUpdateTask, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    onUpdateTask(task.id, { ...task, title, description });
  };

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span>{title}</span>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Hide' : 'Show'} Details
        </button>
      </div>
      {isExpanded && (
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
          <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
