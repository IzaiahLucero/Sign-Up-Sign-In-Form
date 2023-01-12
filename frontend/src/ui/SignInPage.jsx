import React, { useState } from 'react';
import {SignInForm} from "./SignInForm.jsx";
import { Col, Container, Row } from 'react-bootstrap'
import { NavigationMenu } from './NavigationMenu.jsx'

export function SignInPage() {
  return (
    <>
      <NavigationMenu/>
      <Container fluid id="content-background" className="pt-5">
        <Container id="form-background" className="py-3">
          <Row>
            <Col>
              <h1>Sign In</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <SignInForm/>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Don't have an account? <a href="sign-up">Sign Up</a></p>
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
}