import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../../actions/index';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/dist/antd.compact.min.css';

import { Link } from 'react-router-dom';


export class areaFilter extends Component {
    state = {
        area: '',
        date: moment(),
        value: '',
        valueArea: {}
    }
    handleChange = (event) => {
        this.setState({ valueArea: event.target.value });
    };

    onDateChange = (date) => this.setState({ date });

    showdate = () => {
        var formatDate = this.state.date.format('DD.MM.YYYY');
        return formatDate;
    };



    render() {
        console.log(this.state.valueArea)
        const disabledDate = function (current) {
            return (
                current < moment().subtract(1, 'day') ||
                current > moment().add(7, 'day')
            );
        };
        return (
            <div style={{

                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <div style={{
                    padding: '3px 0',

                }}><select

                    onChange={e => this.setState({ valueArea: e.target.value, validationError: e.target.value === "" ? "select area" : "" })}
                > {this.props.listOfAreas.map((team) => <option key={team.ID} value={team.ID}>{team.Name}</option>)}
                    </select></div>

                <div> <DatePicker
                    disabledDate={disabledDate}
                    onChange={this.onDateChange}
                    value={this.state.date}
                    size="small"
                /></div>



                {/* <DropDownList
                    data={this.props.listOfAreas}
                    textField="Name"
                    dataItemKey="ID"
                    value={this.state.valueArea}
                    onChange={this.handleChange}
                /> */}



                <Link
                    to="/movielist"
                    onClick={() =>
                        this.props.fetchMovie(
                            this.state.valueArea,
                            this.showdate()
                        )
                    }
                >
                    FILTER
							</Link>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listOfAreas: state.movieList.areaList,
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(areaFilter)
