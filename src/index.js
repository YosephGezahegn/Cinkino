import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Header from '../src/containers/Layout/Header';
import store from './store'


ReactDOM.render(
	<Provider
		store={store}
	>    <BrowserRouter>
			<Header />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);