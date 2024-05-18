import React from 'react';

const Items = ({ task, onToggle, onDelete }) => {
  return (
    <div className='item'>
        <li className={`taskItem ${task.completed ? 'completed' : ''}`}>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggle}
        />
        <span onClick={onToggle} className="taskText">
            {task.text}
        </span>
        </li>
        <button onClick={onDelete} className="deleteButton"> Delete </button>
    </div>
  );
};

export default Items;
