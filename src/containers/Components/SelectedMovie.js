import React from 'react'
import { connect } from 'react-redux'
import App from '../../App'
import { Row, Col } from 'antd';
import 'antd/dist/antd.compact.min.css';
export const SelectedMovie = ({ selectedMovie }) => {
    return (
        <div>

            <Row> <h1 style={{ color: 'white' }}>{selectedMovie.Title}</h1>
                <Col span={12}>	<img
                    alt={selectedMovie.Title}
                    src={selectedMovie.Images.EventMediumImagePortrait}
                /></Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedMovie: state.movieSelected.selectedMovie,

})



export default connect(mapStateToProps, null)(SelectedMovie)
