import React from 'react';
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

import './MyNavbar.scss';

class MyNavbar extends React.Component {
    state = {
        isOpen: true,
        searchValue: "",
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;
        return(
            <div className="MyNavbar">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand to="/home">Team Learning Concepts</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/courses">Courses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/users">Users</NavLink>
                    </NavItem>
                    <NavItem className="mt-2">
                        <SearchBar />
                    </NavItem>
                </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MyNavbar;