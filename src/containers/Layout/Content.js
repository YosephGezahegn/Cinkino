import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";

import FavouriteMovies from '../Components/favouriteMovies';
import movieList from '../Components/movieList'
import SearchResults from '../Components/searchResults';
import SelectedMovie from '../Components/SelectedMovie';
import Home from './Home';
import Maps from '../Components/Maps';

export default class swtich extends Component {
    render() {
        return (
            <Switch>
                <Route path="/map" component={Maps} />
                <Route path="/result" component={SearchResults} />
                <Route path="/favourite" component={FavouriteMovies} />
                <Route path="/movielist" component={movieList} />
                <Route path="/selected" component={SelectedMovie} />
                <Route path="/" component={Home} />

            </Switch>




        )
    }
}
