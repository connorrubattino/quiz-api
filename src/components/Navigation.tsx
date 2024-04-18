import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


type NavigationProps = {}

export default function Navigation({}: NavigationProps){


    return (
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand as={Link} to='/question/all'>Quiz Me</Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id='nav-collapse'>
                    <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/user'>Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

