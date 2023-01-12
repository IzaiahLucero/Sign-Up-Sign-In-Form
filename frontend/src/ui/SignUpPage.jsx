import { Col, Container, Row } from 'react-bootstrap'
import { NavigationMenu } from './NavigationMenu.jsx'
import { SignInForm } from './SignInForm.jsx'
import { SignUpFormAdmin } from './SignUpFormAdmin.jsx'

export function SignUpPage () {
  return (
    <>
        <NavigationMenu/>
        <Container fluid id="content-background" className="pt-5">
          <Container id="form-background" className="py-3">
            <Row>
              <Col>
                <h1>Sign Up</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <SignUpFormAdmin/>
              </Col>
            </Row>
          </Container>
        </Container>
    </>
  )
}