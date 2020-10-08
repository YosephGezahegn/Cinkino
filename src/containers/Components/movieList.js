import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, selectedMovie, addfavMovie } from '../../actions/index';
import '../Styles/movieList.css'
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { Card, Button } from 'antd';

import 'antd/dist/antd.compact.min.css';
class MovieList extends Component {
	componentDidMount() {
		const { fetchMovie } = this.props;
		fetchMovie();
		console.log("movies fetched")
	}
	mapMovies() {
		return this.props.movies.map((movie) => {
			var startTime = new Date(movie.dttmShowStart);
			var start = startTime.toLocaleTimeString();
			var endTime = new Date(movie.dttmShowEnd);
			var end = endTime.toLocaleTimeString();
			var mDATE = startTime.toLocaleDateString();
			const { Meta } = Card;
			return (
				<div key={movie.ID} style={{ padding: "10px" }}>
					<Card
						hoverable={true}
						style={{ width: 300 }}
						cover={
							<img
								alt={movie.Title}
								src={movie.Images.EventMediumImagePortrait}
							/>
						}
						actions={[
							<Button type="primary"><Link style={{ color: "white" }}
								to='/selected'
								onClick={() => this.props.selectedMovie(movie.EventID)}> Details{`  `}
							</Link></Button>,
							<Button type="danger" onClick={() => this.props.addfavMovie(movie)}>Add to Fav</Button>,
							<a href={movie.EventURL} >
								BUY TICKETS
						</a>,
						]}
					>
						<Meta

							title={movie.Title}
							description={movie.Theatre}
						/>
					</Card>,


				</div>
			);
		});
	}

	render() {
		return <div className='movie-container'>{this.mapMovies()}</div>;
	}
}
/*
<button style={{ backgroundColor: "#8bc34a" }}><Link
							style={{ color: "white" }}
							to='/selected'
							onClick={() => this.props.selectedMovie(movie.EventID)}> Details
							</Link></button>

						<button
							style={{ backgroundColor: "#8bc34a" }}
							onClick={() => this.props.addfavMovie(movie)}

						>
							ADD TO FAV
								</button>
<img
						style={{ height: '15rem', width: '15rem' }}
						src={movie.Images.EventLargeImagePortrait}
						srcSet={`${movie.Images.EventSmallImagePortrait} 300w,
								${movie.Images.EventMediumImagePortrait} 768w,
								${movie.Images.EventLargeImagePortrait} 1280w`}
						className="card-img-top"
						alt={'...'}
					/>
					<div
						className="card-body"
						style={{ height: '10rem', width: '15rem' }}
					>
						<h5 className="card-title" style={{ color: 'white' }}>
							{movie.Title}
						</h5>
						<p>
							{movie.Theatre} <br /> {mDATE} <br />
							Start : {start}
							<br />
							End : {end}
						</p>

						<a href={movie.EventURL} className="btn btn-warning">
							BUY TICKETS
						</a>
						<hr />
					</div>
<p>
							{movie.Theatre} <br /> {mDATE} <br />
							Start : {start}
							<br />
							End : {end}
						</p> */



function mapStateToProps(state) {
	return {
		movies: state.movieList.movieList,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovie, selectedMovie, addfavMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
