import { Col, Container, Row } from 'react-bootstrap'
import { NavigationMenu } from './NavigationMenu.jsx'

export function Dashboard () {
  return (
    <>
      <NavigationMenu/>
      <Container fluid>
          <Row id="header-background" className="align-items-center">
            <Col id="header-content">
              <h1>
                Congratulations! You've successfully signed in!
              </h1>
            </Col>
          </Row>
      </Container>

    </>
  )
}