import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = ({ DetailTasks }) => {
  return (
    <div className="container">
      {DetailTasks.map(task => (
        <div className="task" key={task.id}>
          <div className="box">
            <span className={`cizgi cizgi-${task.importance.toLowerCase()}`}></span>
            <Link to={`/details/${task.id}`}>
              <div className="taskInfo">
                <span className="task-title">{task.title}</span>
                <span className="task-description">{task.description}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};	

export default TodoList;
