import React, { Component } from 'react'
import { connect } from 'react-redux'
import currentLocation from '../../actions/index'

export class GeoLocation extends Component {
    state = {};

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }
    render() {
        return (
            <div>
                <h4>Using geolocation JavaScript API in React</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocation)
