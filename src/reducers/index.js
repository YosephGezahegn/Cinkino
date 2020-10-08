import { combineReducers } from 'redux';
import searchedMovie from './reducer_searchMovie';
import addedtofav from './reducer_addfav';
import fetchedMovies from './reducer_fetchMovies';
import selectedMovie from './reducer_selected'
import currentLocation from './map_reducer'
import '../containers/index.css'

const rootReducer = combineReducers({
	movieSearched: searchedMovie,
	movieList: fetchedMovies,
	movieFavourite: addedtofav,
	movieSelected: selectedMovie,
	location: currentLocation

});

export default rootReducer;
