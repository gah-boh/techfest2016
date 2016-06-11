import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class AppNavbar extends React.Component {
    render() {
        return (
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Chrome Dev Tools Deep Dive</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="selectors">
                        <NavItem>Elements</NavItem>
                    </LinkContainer>
                    <LinkContainer to="sources">
                        <NavItem>Sources</NavItem>
                    </LinkContainer>
                    <LinkContainer to="flamegraph">
                        <NavItem>Flame Graph</NavItem>
                    </LinkContainer>
                    <LinkContainer to="animations">
                        <NavItem>Animations</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}
