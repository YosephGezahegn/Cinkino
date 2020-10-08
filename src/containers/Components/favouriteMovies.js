import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletefavMovie } from '../../actions/index';
import { bindActionCreators } from 'redux';


class FavouriteMovies extends Component {
	deletefavMovie(e, index) {
		e.preventDefault();
		this.props.deletefavMovie(index);
		console.log(this.props.deletefavMovie(index));
	}

	mapMovies() {

		return this.props.favmoviestomap.map((movie) => {
			console.log(movie)
			return <div key={movie.ID}>

				<div class="cards">
					<div class="card-item">
						<div class="card-image">
							<img alt="movie" src={movie.Images.EventLargeImageLandscape}
								height="250px"
								width="450px"
							//  cloudName="dihsyrtvn" publicId="sample" width="300" crop="auto"
							/></div>
						<div class="card-info">
							<h2 class="card-title">{movie.OriginalTitle}</h2>

						</div>
						<button
							onClick={(e) => this.deletefavMovie(e, movie.ID)}
							style={{ backgroundColor: '#ff4d4fcc' }}
						>
							Remove{' '}
						</button>
					</div>
				</div>



			</div>

		})
	}


	render() {
		console.log(this.mapMovies())
		return (
			<div>
				<h1 style={{ padding: '10px', color: 'white' }}>FAVOURITE MOVIES</h1>
				<div className="container">{this.mapMovies()}</div>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		favmoviestomap: state.movieFavourite.favMovie,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ deletefavMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteMovies);
