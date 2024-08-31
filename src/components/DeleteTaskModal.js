import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteTaskModal = ({ show, handleClose, task, handleDelete }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Görevi Sil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bu görevi silmek istediğinizden emin misiniz?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Kapat</Button>
                <Button variant="danger" onClick={() => handleDelete(task.id)}>Sil</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteTaskModal;
