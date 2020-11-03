import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import SearchBar from '../SearchBar/SearchBar';
import courseData from '../../../helpers/data/courseData';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
    state = {
        isOpen: true,
        searchValue: '',
        filteredCourses: [],
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    searchFunction = (e) => {
        console.log('hi from onChange', e.target.value);
        const searchVal = this.setState({ searchValue: e.target.value });
        console.log('search Value:', this.statesearchValue);
        courseData.search(searchVal).then((response) => { this.setState({ filteredCourses: response }) });
    }

    render() {
        const { isOpen, searchValue } = this.state;
        return(
            <div className="MyNavbar">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand to="/home">Team Learning Concepts</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/courses'>Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/users'>Users</NavLink>
            </NavItem>
                    <NavItem className="mt-2">
                        <SearchBar searchFunction={this.searchFunction} searchValue={searchValue}/>
                    </NavItem>
                </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MyNavbar;