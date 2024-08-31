import React, { useState } from 'react';

const TaskUpdateModal = ({ show, handleClose, task, handleSave }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.completed ? 'Tamamlandı' : 'Tamamlanmadı');

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const handleSubmit = () => {
        const updatedTask = {
            ...task,
            title,
            description,
            completed: status === 'Tamamlandı'
        };
        handleSave(updatedTask);
    };

    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!show}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Görev Güncellemesi</h5>
                        <button className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">İsim</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} 
                                placeholder="İsim güncellemesi."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Tanım</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput2"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} 
                                placeholder="Açıklama Güncellemesi"
                            />
                        </div>
                        <div className="dropdown mb-3">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {status}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange('Tamamlandı')}>Tamamlandı</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange('Tamamlanmadı')}>Tamamlanmadı</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Kapat</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Kaydet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskUpdateModal;
