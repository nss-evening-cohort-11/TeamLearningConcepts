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
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';
import courseData from '../../../helpers/data/courseData';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
    state = {
        isOpen: true,
    }

    static propTypes = {
        searchValue: PropTypes.string.isRequired,
        filteredCourses: PropTypes.array.isRequired,
        searchValueStateChange: PropTypes.func.isRequired,
        searchFunction: PropTypes.func.isRequired,
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;
        const { searchValueStateChange, searchFunction, searchValue } = this.props;
        return(
            <div className="MyNavbar">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand to="/home">Team Learning Concepts</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem>
                    <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/courses'>Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/userProfile'>User Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/users'>Users</NavLink>
            </NavItem>
            <NavItem className="mt-2">
              <SearchBar searchValueStateChange={searchValueStateChange} searchFunction={searchFunction} searchValue={searchValue} />
            </NavItem>
            <NavItem>
                <NavLink className="navbar-links" tag={RRNavLink} to='/shopping-cart'><i class="fas fa-shopping-cart"></i></NavLink>
            </NavItem>
                </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MyNavbar;
