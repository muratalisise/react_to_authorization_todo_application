import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh, faTimes } from '@fortawesome/free-solid-svg-icons';

const TodoDetailsTasklist = ({ tasks, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const handleEdit = (task) => {
        setCurrentTask({ ...task });
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (currentTask) {
            onUpdate(currentTask.id, currentTask);
            setIsEditing(false);
            setCurrentTask(null);
        }
    };

    const handleComplete = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        onUpdate(null, updatedTasks); // Notify parent about the update
    };

    const handleDelete = (taskId) => {
        onDelete(taskId); // Notify parent about the deletion
    };

    const handleSubtaskComplete = (taskId, subtaskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId
                ? {
                      ...task,
                      subtasks: task.subtasks.map(subtask =>
                          subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
                      )
                  }
                : task
        );
        onUpdate(taskId, updatedTasks); // Notify parent about the update
    };

    const handleSubtaskDelete = (taskId, subtaskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId
                ? {
                      ...task,
                      subtasks: task.subtasks.filter(subtask => subtask.id !== subtaskId)
                  }
                : task
        );
        onUpdate(taskId, updatedTasks); // Notify parent about the update
    };

    return (
        <div className="todolist-item">
            {tasks.map((task) => (
                <div key={task.id} className={`task p-0 d-flex justify-content-center align-items-center ${task.completed ? 'completed' : ''}`}>
                    <div className="box w-100 d-flex align-items-center">
                        <input
                            className="form-check-input ms-4 me-4 m-3"
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleComplete(task.id)}
                        />
                        <div className="taskInfo d-flex flex-wrap align-content-center">
                            <span className="task-title">{task.title}</span>
                            <span className="task-description">{task.description}</span>
                        </div>
                    </div>

                    <div className="icon d-flex justify-content-center align-content-center">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleEdit(task); }} className="editTask">
                            <FontAwesomeIcon icon={faRefresh} className="me-2 reflesh-icon d-flex justify-content-center align-content-center p-1" />
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleDelete(task.id); }} className="deleteTask">
                            <FontAwesomeIcon icon={faTimes} className='delete-icon d-flex justify-content-center align-content-center p-1' />
                        </a>
                    </div>

                    {task.subtasks && task.subtasks.length > 0 && (
                        <div className="subtasks mt-2">
                            <h6>Subtasks</h6>
                            <ul>
                                {task.subtasks.map((subtask) => (
                                    <li key={subtask.id} className={subtask.completed ? 'completed' : ''}>
                                        <input
                                            type="checkbox"
                                            checked={subtask.completed}
                                            onChange={() => handleSubtaskComplete(task.id, subtask.id)}
                                        />
                                        <span>{subtask.title}</span>
                                        <a href="#" onClick={(e) => { e.preventDefault(); handleSubtaskDelete(task.id, subtask.id); }} className="deleteSubtask">
                                            <FontAwesomeIcon icon={faTimes} className='delete-icon d-flex justify-content-center align-content-center p-1' />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}

            {isEditing && currentTask && (
                <div className="edit-task mt-3">
                    <input
                        type="text"
                        value={currentTask.title}
                        onChange={(e) => setCurrentTask({ ...currentTask, title: e.target.value })}
                    />
                    <textarea
                        value={currentTask.description}
                        onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
                    />
                    <button onClick={handleUpdate} className="btn btn-primary mt-2">Güncelle</button>
                    <button onClick={() => setIsEditing(false)} className="btn btn-secondary mt-2">İptal</button>
                </div>
            )}
        </div>
    );
};

export default TodoDetailsTasklist;
