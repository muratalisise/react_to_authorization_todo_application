// AppContent.js
import React from 'react';
import Header from './Header'; // Adjust import based on your structure

const AppContent = ({ tasks, onSearch, /* other props */ }) => {
  return (
    <div>
      <Header onSearch={onSearch} />
      {/* Other content */}
    </div>
  );
};

export default AppContent;
