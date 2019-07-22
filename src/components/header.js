import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import menu from '../assets/menu.svg';
import moon from '../assets/moonwhite.svg';

const Header = (props) => (

    <div>
        <Navbar >
            <Navbar.Header
                fixedTop
                style={{
                    position: 'absolute',
                    right: '0px',
                    left: '0px',
                    backgroundColor: 'black',
                    height: '56px',
                }} >

                <Navbar.Brand >

                    <div onClick={props.clickMenuBar}>
                        <img src={menu}

                            style={{ paddingLeft: '24px' }}
                            alt={menu} />
                    </div>

                </Navbar.Brand>

                <div >
                    <Navbar.Brand>
                        <a
                            style={{ paddingTop: '7px',
                                     color: '#FFFFFF',
                                     fontSize: '20px',
                                     position:'absolute' }}>
                            All Categories</a>
                    </Navbar.Brand>

                    <Navbar.Brand>
                        <a
                            style={{ color: '#FFFFFF',
                                     fontSize: '12px',
                                     position:'relative',
                                     top:'13px' }}>
                            Last Seen</a>
                    </Navbar.Brand>
                </div>


                <Nav pullRight >
                    <NavItem >
                        <div
                            style={{
                                width: '24px',
                                height: '24px',
                            }} >
                            <img src={moon}
                                onClick={props.nightModeToggle}
                                style={{
                                    position: 'absolute',
                                    right: '28px'
                                }}
                                alt={moon} />
                        </div>
                    </NavItem>
                </Nav>
            </Navbar.Header>
        </Navbar>
    </div>
);

export default Header;