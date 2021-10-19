import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Menubar.css'
const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <div >

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
                <Container>
                    <Navbar.Brand className="fw-bold fs-5">Eye Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5 ">
                            <Nav.Link as={Link} to='/home' className="p-3 text-light">Home</Nav.Link>
                            <Nav.Link as={Link} to='/Services' className="p-3 text-light" >Services</Nav.Link>
                            <Nav.Link as={Link} to='/appointment' className="p-3 text-light">Appointment</Nav.Link>
                            <Nav.Link as={Link} to='/doctors' className="p-3 text-light">Doctors</Nav.Link>
                            <span className="p-3 text-light">{user.displayName}  </span>
                            {
                                user.email ?
                                    <button onClick={logOut} className="p-2 rounded-pill">Logout</button>
                                    :
                                    <Nav.Link as={Link} to='/login' className="p-3 text-light  " ><i class="fas fa-user"></i> Login</Nav.Link>
                            }


                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>








        </div>
    );
};

export default Menubar;