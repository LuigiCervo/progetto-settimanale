import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import "./CustomCarousel.css";

class CustomCarousel extends Component {

	state = {
		films: [],
		isLoading: true,
		error: false
	}

	update = async() => {
		try {
			let queryString = this.props.query.replace(' ', '+');
			let response = await fetch(
				`https://www.omdbapi.com/?s=${queryString}&apikey=5487612a`
			)
			if (response.ok) {
				let data = await response.json();
				console.log(data);
				this.setState(
					{
						films: data.Search,
						isLoading: false
					}
				);
			} else {
				console.log("Error during API fetch.");
				this.setState(
					{
						isLoading: false,
						error: true
					}
				)
			}
		} catch (error) {
			console.log(error);
			this.setState(
				{
					isLoading: false,
					error: true
				}
			)
		}
	}

	componentDidMount() {
		this.update();
	}

	carouselItem = (film) => {
		return (
<div key={film.imdbID} className="carouselItem">
	<img className="mx-1" src={film.Poster} alt='' />
</div>
		);
	}

	render() {
		return (
<div className="">
	{this.state.isLoading &&
	<Spinner animation="border" role="status" variant="secondary">
		<span className="visually-hidden">Loading...</span>
	</Spinner>} 
	{this.state.error && <Alert variant="danger"><h3>Something went wrong :( , <br/>please try again later...</h3></Alert>}
	<div className="carousel">
		{
			this.state.films.map(film => this.carouselItem(film))
		}
	</div>
</div>
		);
	}
}

export default CustomCarousel;