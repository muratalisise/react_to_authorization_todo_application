import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/Tasklist';
import Actions from './components/Action';
import AddTaskButton from './components/AddTaskButton';
import TodoDetails from './components/TodoDetails';
import UpdateTaskModal from './components/UpdateTaskModal';
import Swal from 'sweetalert2';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1, title: 'Market Alışverişi', description: '', completed: false, subTasks: [
                { id: 11, title: 'Balık al', description: 'Balık taze ve cinsi istavrit olmalı.', completed: false },
                { id: 12, title: 'Armut al', description: '', completed: false },
                { id: 13, title: 'Elma al', description: '', completed: false },
                { id: 14, title: 'Göbek marul al', description: '', completed: false },
                { id: 15, title: 'Havuç al', description: '', completed: false },
            ]
        },
        {
            id: 2, title: 'Araba Alışverişi', description: '', completed: false, subTasks: [
                { id: 21, title: 'Far al', description: '', completed: false },
                { id: 22, title: 'Tampon al', description: '', completed: false },
                { id: 23, title: 'Çamurluk al', description: '', completed: false },
            ]
        },
        {
            id: 3, title: 'Kitap Alışverişi', description: '', completed: false, subTasks: [
                { id: 31, title: 'Romanlar', description: '', completed: false },
                { id: 32, title: 'Hikaye kitapları', description: '', completed: false },
                { id: 33, title: 'Gezi kitapları', description: '', completed: false },
                { id: 34, title: 'Şiir kitapları', description: '', completed: false },
            ]
        }
    ]);

    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleSearch = (query) => {
        if (query) {
            setFilteredTasks(tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase())));
        } else {
            setFilteredTasks(tasks);
        }
    };

    const handleSort = (option) => {
        setSortOption(option);
        filterAndSortTasks(searchQuery, option);
    };

    const filterAndSortTasks = (query, sortOption) => {
        let filtered = tasks.filter(task =>
            task.title.toLowerCase().includes(query.toLowerCase())
        );

        if (sortOption === 'asc') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === 'desc') {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        }

        setFilteredTasks(filtered);
    };

    const handleUpdateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const handleAddTask = () => {
        setSelectedTask(null);
        setIsModalOpen(true);
    };

    const handleCompleteTask = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        filterAndSortTasks(searchQuery, sortOption);
    };

    const handleDeleteTask = (taskId) => {
        Swal.fire({
            title: 'Silmek İstediğinize Emin Misiniz?',
            text: 'Bunu geri alamayacaksınız!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Evet',
            cancelButtonText: 'Hayır',
            reverseButtons: true,
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger me-2'
            },
            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedTasks = tasks.filter(task => task.id !== taskId);
                setTasks(updatedTasks);
                filterAndSortTasks(searchQuery, sortOption);

                Swal.fire({
                    title: 'Silindi!',
                    text: 'Görev silindi.',
                    icon: 'success',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: 'İptal Edildi',
                    text: 'Görev devam ediyor',
                    icon: 'error',
                    customClass: {
                        confirmButton: 'btn btn-danger'
                    }
                });
            }
        });
    };

    const handleOpenModal = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedTask(null);
        setIsModalOpen(false);
    };

    const handleSaveTask = (newTask) => {
        if (newTask.id) {
            handleUpdateTask(newTask);
        } else {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            filterAndSortTasks(searchQuery, sortOption);
        }
        handleCloseModal();
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={isAuthenticated ? <Navigate to="/" /> : <Login setAuth={setIsAuthenticated} />}
                />
                <Route
                    path="/"
                    element={isAuthenticated ? (
                        <>
                            <Header onSearch={handleSearch} onSort={handleSort} />
                            <Actions />
                            <TaskList
                                tasks={filteredTasks}
                                onComplete={handleCompleteTask}
                                onDelete={handleDeleteTask}
                                onEdit={handleOpenModal}
                            />
                            <AddTaskButton onClick={handleAddTask} />
                            <UpdateTaskModal
                                show={isModalOpen}
                                handleClose={handleCloseModal}
                                task={selectedTask}
                                handleSave={handleSaveTask}
                            />
                        </>
                    ) : (
                        <Navigate to="/login" />
                    )}
                />
                <Route
                    path="/details/:id"
                    element={<TodoDetails tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />}
                />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
    );
};

export default App;
