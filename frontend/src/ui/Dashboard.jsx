import { Col, Container, Row } from 'react-bootstrap'
import { NavigationMenu } from './NavigationMenu.jsx'

export function Dashboard () {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <NavigationMenu/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>
              Dashboard
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}