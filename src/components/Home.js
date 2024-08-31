import React from 'react';

const Home = () => {
    const handleLogout = () => {
        localStorage.removeItem('token'); // Token'ı sil
        window.location.reload(); // Sayfayı yenile
    };

    return (
        <div>
            <h1>Welcome to the Todo App</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
