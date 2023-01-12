import React, {useEffect} from "react"
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { NavigationMenu } from './NavigationMenu.jsx'


export function Home() {

  const dispatch = useDispatch()
  const initialEffects = () => {

  }
  useEffect(initialEffects, [dispatch])

  return (
    <>
      <NavigationMenu/>
      <Container fluid>
        <Row id="header-background" className="align-items-center">
          <Col xs={8} id="header-content" className="mx-auto">
            <h1>Welcome</h1>
            <h3>This application was developed to illustrate a functional "Sign In" & "Sign Up" form.</h3>
            <p>When the user navigates to this site they are greeted with this page. Upon clicking on the "Sign In" link in the navigation bar they will be directed to the sign in form. On the "Sign In" page the user can enter in their email and password to authenticate themselves. If the user has never visited the site before they are able to register for an account via the "Sign Up" link. After the user has submitted their information to sign up they will receive a authentication email in which they will have to click on the link in order to be able to sign in. The form is generated using Formik and utilizes Yup for validation and submits the data to a PostgreSQL Database that is hosted by Digital Ocean.</p>
          </Col>
        </Row>
      </Container>
    </>
    );
}