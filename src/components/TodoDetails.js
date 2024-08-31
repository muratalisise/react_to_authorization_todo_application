import React from 'react';
import { useParams } from 'react-router-dom';
import TodoDetailsHeader from './TodoDetailsHeader';
import TodoDetailsActions from './TodoDetailsActions';
import TodoDetailsTasklist from './TodoDetailsTasklist';

const TodoDetails = ({ tasks, onUpdateTask, onDeleteTask, handleSearch }) => {
    const { id } = useParams();
    const task = tasks.find(task => task.id === parseInt(id, 10));

    if (!task) {
        return <div>Görev bulunamadı</div>;
    }

    return (
        <div>
            <TodoDetailsHeader title={task.title} onSearch={handleSearch} />
            <TodoDetailsActions />
            <TodoDetailsTasklist
                tasks={task.subTasks}
                onUpdate={(subtaskId, updatedSubtask) => onUpdateTask(task.id, subtaskId, updatedSubtask)}
                onDelete={(subtaskId) => onDeleteTask(task.id, subtaskId)}
            />
        </div>
    );
}

export default TodoDetails;
