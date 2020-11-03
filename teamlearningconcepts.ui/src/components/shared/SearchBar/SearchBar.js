import React from 'react';
// import { Button } from 'reactstrap';
import  { Link }  from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchBar.scss';

import courseData from '../../../helpers/data/courseData';

class SearchBar extends React.Component {

    static propTypes = {
        searchValue: PropTypes.string.isRequired,
        searchFunction: PropTypes.func.isRequired,
        searchValueStateChange: PropTypes.func.isRequired,
        filteredCourses: PropTypes.array.isRequired,
    }

    state = {
        searchValue: '',
        filteredCourses: [],
    }

    // searchValueStateChange = (e) => {
    //     this.setState({ searchValue: e.target.value });
    // }

    // searchFunction = () => {
    //     const searchVal = this.state.searchValue;
    //     courseData.search(searchVal)
    //     .then(response => { this.setState({ filteredCourses: response }) });
    //     this.props.history.push('/search-results');
    // }
    
    render() {
        const { searchValue, filteredCourses } = this.props;
        return(
            <div className="SearchBar">
                <label htmlFor="search" className="label">Search</label>
                <input type="text" id="search" value={searchValue} onChange={this.props.searchValueStateChange} placeholder="  Search..." />
                <Link className="btn btn-info search-btn" to="/search-results" onClick={this.props.searchFunction}>Search</Link>
            </div>
        )
    }
}

export default SearchBar;