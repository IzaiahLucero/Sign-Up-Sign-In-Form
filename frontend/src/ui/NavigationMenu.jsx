import { Container, Nav, Navbar, Row } from 'react-bootstrap'

export function NavigationMenu () {
  return (
    <>
      <Container fluid>
        <Row>
          <Navbar bg="light">
              <Navbar.Brand href="/">Sample Program</Navbar.Brand>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link href="sign-in">Sign In</Nav.Link>
              </Nav>
          </Navbar>
        </Row>
      </Container>

    </>
  )
}