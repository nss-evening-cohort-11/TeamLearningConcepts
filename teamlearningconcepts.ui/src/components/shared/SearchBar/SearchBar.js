import React from 'react';
import  { Link }  from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchBar.scss';

class SearchBar extends React.Component {

    static propTypes = {
        searchValue: PropTypes.string.isRequired,
        searchFunction: PropTypes.func.isRequired,
        changeState: PropTypes.func.isRequired,
    }
    
    render() {
        const { searchValue, searchFunction, changeState } = this.props;
        return(
            <div className="SearchBar">
                <label htmlFor="search" className="label">Search</label>
                <input type="text" id="search" value={searchValue} onChange={changeState} placeholder="  Search..." />
                <Link className="btn btn-info search-btn" to="/search-results" onClick={searchFunction}>Search</Link>
            </div>
        )
    }
}

export default SearchBar;