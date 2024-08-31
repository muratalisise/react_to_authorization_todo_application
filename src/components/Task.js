import React, { useState } from 'react';
import UpdateTaskModal from './UpdateTaskModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Task = ({ task, onComplete, onDelete, linkTo, onUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleSave = (updatedTask) => {
        if (onUpdate) {
            onUpdate(updatedTask); // Güncellenmiş görevi üst bileşene ilet
        }
        handleModalClose(); // Modalı kapat
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(task.id);
        }
    };

    return (
        <>
            <div className={`task ${task.completed ? 'completed' : ''} p-0 d-flex justify-content-center align-items-center`}>
                <div className="box w-100 d-flex align-items-center">
                    <input
                        className="form-check-input ms-4 me-4 m-3"
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onComplete(task.id)}
                    />
                    <Link to={linkTo} className="taskInfo d-flex flex-wrap align-content-center">
                        <span className="title">{task.title}</span>
                        <span className="todolist-description">{task.description}</span>
                    </Link>
                </div>
                <div className="icon d-flex justify-content-center align-content-center">
                    <a href="#" onClick={handleModalOpen} className="refreshTask">
                        <FontAwesomeIcon icon={faRefresh} className="me-2 reflesh-icon d-flex justify-content-center align-content-center p-1" />
                    </a>
                    <a href="#" onClick={handleDelete} className="deleteTask">
                        <FontAwesomeIcon icon={faTimes} className="delete-icon d-flex justify-content-center align-content-center p-1" />
                    </a>
                </div>
            </div>

            {/* Güncelleme modalı */}
            <UpdateTaskModal
                show={isModalOpen}
                handleClose={handleModalClose}
                task={task}
                handleSave={handleSave} // Güncellenmiş görevi handleSave işlevi aracılığıyla üst bileşene ilet
            />
        </>
    );
};

export default Task;
