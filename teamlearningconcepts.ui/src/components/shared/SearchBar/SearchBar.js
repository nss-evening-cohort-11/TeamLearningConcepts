import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

class SearchBar extends React.Component {

    static propTypes = {
        searchValue: PropTypes.string.isRequired,
        searchFunction: PropTypes.func.isRequired,
    }
    
    render() {
        const { searchValue, searchFunction } = this.props;
        return(
            <div className="SearchBar">
                <input type="text" id="search" value={searchValue} onChange={searchFunction} placeholder="  Search..." />
                <label htmlFor="search" className="label">Search</label>
            </div>
        )
    }
}

export default SearchBar;