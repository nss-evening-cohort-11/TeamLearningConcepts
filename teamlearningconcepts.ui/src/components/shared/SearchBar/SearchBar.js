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
    }


    
    render() {
        const { searchValueStateChange, searchFunction, searchValue } = this.props;
        return(
            <div className="SearchBar">
                <label htmlFor="search" className="label">Search</label>
                <input type="text" id="search" value={searchValue} onChange={searchValueStateChange} placeholder="  Search..." />
                {
                    searchValue
                    ? <Link className="btn btn-info search-btn" to="/search-results" onClick={searchFunction}>Search</Link>
                    : <Link className="btn btn-info search-btn disabled">Search</Link>
                }
            </div>
        )
    }
}

export default SearchBar;