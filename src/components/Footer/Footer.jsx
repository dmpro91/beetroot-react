import { Container, Navbar } from 'react-bootstrap'
import './Footer.scss'

export const Footer = () =>    <Navbar bg="dark" variant="dark">
   <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Beetroot</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
</Navbar>