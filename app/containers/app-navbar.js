import React from 'react';

import { Navbar, NavItem } from 'react-bootstrap';

export default class AppNavbar extends React.Component {
    render() {
        return (
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Chrome Dev Tools Deep Dive</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}
