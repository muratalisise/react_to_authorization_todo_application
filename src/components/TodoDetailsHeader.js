import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TodoDetailsHeader = ({ title, onSearch = () => {} }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');  
    };

    const handleSearchChange = (e) => {
        console.log('onSearch:', onSearch);
        if (typeof onSearch === 'function') {
            console.log('Search query:', e.target.value);
            onSearch(e.target.value);
        } else {
            console.error('onSearch is not a function');
        }
    };
    
    return (
        <div className="header d-flex justify-content-between align-items-center flex-wrap">
            <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={handleBackClick}
                style={{ cursor: 'pointer', fontSize: '24px' }} 
            />
            <h4 className="title text-center flex-grow-1">{title}</h4>
            <div className="search-box d-flex justify-content-center w-100">
                <input
                    type="search"
                    className="form-control mt-2 mb-2 rounded-pill"
                    placeholder="Arama.."
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
}

export default TodoDetailsHeader;
