import React, {useEffect} from "react"
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { SignUpFormAdmin } from './SignUpFormAdmin.jsx'
import { NavigationMenu } from './NavigationMenu.jsx'


export function Home() {

  const dispatch = useDispatch()
  const initialEffects = () => {

  }
  useEffect(initialEffects, [dispatch])

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
                <SignUpFormAdmin/>
              </Col>
            </Row>
          </Container>
        </>
    )
}