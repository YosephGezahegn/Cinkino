import React, { Component } from 'react'
import Filter from '../Components/areaFilter';
import Switcher from './Content';
import AutoSuggest from '../Components/AutoSuggest';

import { Link } from 'react-router-dom';
import '../Styles/header.css'

export default class header extends Component {
    state = {
        drawerPos: 1
    };

    handleDrawer = () => {
        if (this.state.drawerPos < 2) {
            this.setState((state) => ({
                drawerPos: state.drawerPos + 1
            }));
        } else {
            this.setState({
                drawerPos: 0
            })
        }
    };



    render() {
        let drawerClass = [];
        let mainClass = [];
        if (this.state.drawerPos === 1) {
            drawerClass.push("drawerMin");
            mainClass.push("mainMin")
        } else if (this.state.drawerPos === 2) {
            drawerClass.push("drawerOpen");
            mainClass.push("mainOpen");
        } else {
            drawerClass = [];
            mainClass = [];
        }
        return (
            <div className="App">
                <div className="navbar"> <i className="material-icons" onClick={this.handleDrawer}>menu</i> <h3><AutoSuggest /> <Filter /></h3>
                    <br /></div>
                <aside className={drawerClass.join(" ")} >
                    <ul>
                        <Link to="/movielist"><li><i className="material-icons">dashboard</i><span>Movies</span></li></Link>
                        <Link to="/favourite"> <li><i className="material-icons">people</i><span>Favourites</span></li></Link>
                        <Link to="/map"> <li><i className="material-icons">map</i><span>Map</span></li></Link>
                    </ul>
                </aside>
                <main className={mainClass.join(" ")}>
                    <Switcher />
                </main>
            </div>
        )
    }
}
