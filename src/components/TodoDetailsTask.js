const TodoDetailsDetailTasks = ({ DetailTaskss, onCompleteDetailTasks }) => {
	return (
	  <div className="todolist-item">
		{DetailTaskss.map((DetailTasks) => (
		  <div key={DetailTasks.id} className="DetailTasks">
			<input
			  className="form-check-input"
			  type="checkbox"
			  checked={DetailTasks.completed}
			  onChange={() => onCompleteDetailTasks(DetailTasks.id)}
			/>
			<div className="DetailTasksInfo">
			  <span className="DetailTasks-title">{DetailTasks.title}</span>
			  <span className="DetailTasks-description">{DetailTasks.description}</span>
			</div>
			{/* Your icons for refresh and delete */}
		  </div>
		))}
	  </div>
	);
  };
  