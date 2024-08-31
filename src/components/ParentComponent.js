import React, { useState } from 'react';
import TodoDetailsTasklist from './TodoDetailsTasklist';

const ParentComponent = () => {
    const [tasks, setTasks] = useState([
        // Initial tasks here
    ]);

    const handleUpdate = (taskId, updatedTask) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? updatedTask : task
        );
        setTasks(updatedTasks);
    };

    const handleDelete = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <TodoDetailsTasklist
            tasks={tasks}
            setTasks={setTasks} // `setTasks` burada sağlanıyor
            onUpdate={handleUpdate}
            onDelete={handleDelete}
        />
    );
};

export default ParentComponent;
