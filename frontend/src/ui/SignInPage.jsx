import React, { useState } from 'react';
import {SignInForm} from "./SignInForm.jsx";
import { Container } from 'react-bootstrap'

export function SignInPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <SignInForm/>
      </Container>
    </>
  );
}