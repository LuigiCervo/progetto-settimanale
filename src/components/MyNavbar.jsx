import { Component } from "react";
import Logo from "../img/netflix_logo.png";
import Kids from "../img/kids_icon.png";

class MyNavbar extends Component {
	render() {
		return(
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
	<div className="container-fluid d-flex justify-content-start">
		<a className="navbar-brand" href="/">
			<img
				width="200px"
				height="80px"
				src={Logo}
				alt="logo" />
		</a>
		<ul className="navbar-nav">
			<li className="nav-item">
				<a
					className="nav-link active text-light fw-bold"
					aria-current="page"
					href="/">
					Home
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-light fw-bold" href="/">
					Tv shows
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-light fw-bold" href="/">
					Movies
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-light fw-bold" href="/">
					Recently added
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-light fw-bold" href="/">
					My List
				</a>
			</li>
		</ul>
	</div>
	<div className="d-flex justify-content-around align-items-center w-25 ps-5 pe-5 me-5">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="currentColor"
			className="bi bi-search text-light fw-bolder"
			viewBox="0 0 16 16">
			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
		</svg>
		<h5 className="text-light">KIDS</h5>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="currentColor"
			className="bi bi-bell-fill text-light"
			viewBox="0 0 16 16">
			<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
		</svg>
		<button
				className="btn btn-black dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				<img width="40px" src={Kids} alt=""/>
			</button>
	</div>
</nav>
		);
	}
}

export default MyNavbar;