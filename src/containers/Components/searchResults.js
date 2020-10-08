import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addfavMovie } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

class SearchResults extends Component {
	handleClick = () => {
		this.props.addfavMovie(this.props.searchedMovie)
	};

	render() {
		return (
			<div>
				{this.props.searchedMovie.map((movie) => {
					return (
						<div className="container" style={{ padding: "10px", color: "white" }}>
							{/* Page Heading */}

							{/* Project One */}
							<div className="row">
								<div className="col-md-7">

									<img
										className="img-fluid rounded mb-3 mb-md-0"
										src={movie.Images.EventLargeImageLandscape}
										alt=".."
									/>

								</div>
								<div className="col-md-5">
									<h3>{movie.OriginalTitle}</h3>
									<p>
										{movie.ShortSynopsis}
									</p>
									<Link to="/favourite"
										style={{ padding: "15px" }}
										onClick={this.handleClick}
										className="btn btn-success"
									>
										ADD TO FAV
								</Link>

								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { searchedMovie: state.movieSearched.searchValue, };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addfavMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
