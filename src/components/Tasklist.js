import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onComplete, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          linkTo={`/details/${task.id}`}
          onUpdate={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
