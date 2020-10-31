import React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="SearchBar">
                <input type="text" id="search" value={this.props.searchValue} placeholder="  Search..." />
                <label htmlFor="search" className="label">Search</label>
            </div>
        )
    }
}

export default SearchBar;