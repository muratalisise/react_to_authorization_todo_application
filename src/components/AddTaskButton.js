import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTaskButton = ({ onClick }) => (
	<button
		id="addButton"
		className="btn btn-primary index-add rounded-circle position-absolute bottom-0 end-0 me-3 mb-3 d-flex align-items-center justify-content-center"
		onClick={onClick}
	>
		<FontAwesomeIcon icon={faPlus} />
	</button>
);

export default AddTaskButton;
