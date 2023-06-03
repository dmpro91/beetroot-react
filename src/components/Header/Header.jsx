import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import './Header.scss'

export const Header = () => {
  const navigate = useNavigate();

  const navigateHandler = (event, to) => {
    event.preventDefault();
    navigate(to)
  }

  return <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={(event) => navigateHandler(event, '/')}>Home</Nav.Link>
      <Nav.Link onClick={(event) => navigateHandler(event, '/blog')}>Blog</Nav.Link>
      <Nav.Link onClick={(event) => navigateHandler(event, '/news')} >News</Nav.Link>
      <Nav.Link onClick={(event) => navigateHandler(event, '/user')}>UserInfo</Nav.Link>
    </Nav>
  </Container>
  </Navbar>
}

