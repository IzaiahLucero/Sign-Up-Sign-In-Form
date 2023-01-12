import { Container, Nav, Navbar } from 'react-bootstrap'

export function NavigationMenu () {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Sample Program</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Sign Up</Nav.Link>
            <Nav.Link href="sign-in">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}