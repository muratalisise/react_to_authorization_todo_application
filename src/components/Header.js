import React from 'react';
import '../App.css';

const Header = ({ onSearch }) => {
	const handleSearch = (e) => {
		onSearch(e.target.value);
	};

	return (
		<div className="header">
			<h4 className="title d-flex justify-content-center">Yapılacaklar Listem</h4>
			<div className="row">
				<div className="col-9">
					<input
						type="text"
						className="form-control mt-2 mb-2 rounded-pill"
						id="exampleFormControlInput1"
						placeholder="Arama.."
						onChange={handleSearch}
					/>
				</div>
				<div className="col-3 d-flex">
					<div className="dropdown d-flex justify-content-end">
						<button
							className="btn dropdown-toggle rounded-pill border-0 filter"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Filtrele
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#" onClick={() => onSearch('Market')}>Market Alışverişi</a></li>
							<li><a className="dropdown-item" href="#" onClick={() => onSearch('Araba')}>Araba Alışverişi</a></li>
							<li><a className="dropdown-item" href="#" onClick={() => onSearch('Market')}>Market Alışverişi</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
