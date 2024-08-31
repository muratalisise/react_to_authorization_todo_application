import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const UpdateTaskModal = ({ show, handleClose, task, handleSave }) => {
    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [status, setStatus] = useState(task?.completed ? 'Tamamlandı' : 'Tamamlanmadı');

    useEffect(() => {
        if (task) {
            setTitle(task.title || '');
            setDescription(task.description || '');
            setStatus(task.completed ? 'Tamamlandı' : 'Tamamlanmadı');
        }
    }, [task]);

    const handleFormSubmit = () => {
        const updatedTask = {
            ...task,
            title,
            description,
            completed: status === 'Tamamlandı',
        };
        handleSave(updatedTask); // Güncellenmiş görevi üst bileşene ilet
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Görev Güncellemesi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label htmlFor="taskTitle" className="form-label">İsim</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="İsim güncellemesi."
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskDescription" className="form-label">Tanım</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskDescription"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Açıklama Güncellemesi"
                    />
                </div>
                <div className="dropdown mb-3">
                    <Button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        aria-expanded="false"
                    >
                        {status}
                    </Button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <Button
                                className="dropdown-item"
                                onClick={() => setStatus('Tamamlandı')}
                            >
                                Tamamlandı
                            </Button>
                        </li>
                        <li>
                            <Button
                                className="dropdown-item"
                                onClick={() => setStatus('Tamamlanmadı')}
                            >
                                Tamamlanmadı
                            </Button>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Kapat</Button>
                <Button variant="primary" onClick={handleFormSubmit}>Kaydet</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateTaskModal;
