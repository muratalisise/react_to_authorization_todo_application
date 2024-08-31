import React from 'react'

const TodoDetailsActions = () => {
  return (
	<div>
		<div className="actions">
			<div className="row">
				<div className="col-6 d-flex justify-content-start">
					<div className="dropdown">
						<button className="btn dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown"
							aria-expanded="false">
							Filtrele
						</button>
						<ul className="dropdown-menu w-100">
							<li><a className="dropdown-item" href="#">Et Ürünleri</a></li>
							<li><a className="dropdown-item" href="#">Sebze Ürünleri</a></li>
							<li><a className="dropdown-item" href="#">Meyve Ürünleri</a></li>
						</ul>
					</div>
				</div>
				<div className="col-6 d-flex justify-content-end">
					<div className="sortButton w-70 d-flex justify-content-center align-content-center rounded-pill">
						<span className="text">Sırala</span>
						<span className="icon ms-2 "><i className="fa-solid fa-sort"></i></span>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default TodoDetailsActions
