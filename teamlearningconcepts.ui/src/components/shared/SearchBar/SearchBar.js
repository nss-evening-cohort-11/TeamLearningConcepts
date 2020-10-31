import React from 'react';
import  { Button }  from 'reactstrap';
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
                <label htmlFor="search" className="label">Search</label>
                <input type="text" id="search" value={searchValue} onChange={searchFunction} placeholder="  Search..." />
                <Button className="search-btn">Search</Button>
            </div>
        )
    }
}

export default SearchBar;