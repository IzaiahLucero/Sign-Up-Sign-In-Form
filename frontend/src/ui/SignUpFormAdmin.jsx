import React from "react";
import {httpConfig} from "../utils/http-config.js";
import * as Yup from "yup";
import {Formik} from "formik";
import {DisplayError} from "./DisplayError.jsx";
import {DisplayStatus} from "./DisplayStatus.jsx";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'

export const SignUpFormAdmin = () => {
  const signUp = {
    adminEmail: "",
    adminName: "",
    adminPassword: "",
    adminPasswordConfirm: "",
    adminPhone: "",
  };

  const validator = Yup.object().shape({
    adminEmail: Yup.string()
      .email("email must be a valid email")
      .required('email is required'),
    adminName: Yup.string()
      .required("admin name is required"),
    adminPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least eight characters"),
    adminPasswordConfirm: Yup.string()
      .required("Password Confirm is required")
      .min(8, "Password must be at least eight characters"),
    adminPhone: Yup.string()
      .max(10, "phone Number is too long")
  });

  const submitSignUp = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/sign-up-admin/", values)
      .then(reply => {
          let {message, type} = reply;

          if(reply.status === 200) {
            resetForm();
          }
          setStatus({message, type});
        }
      );
  };

  return (

    <Formik
      initialValues={signUp}
      onSubmit={submitSignUp}
      validationSchema={validator}
    >
      {SignUpFormContent}
    </Formik>

  )
};

function  SignUpFormContent(props){
  const {
    status,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <>
      <Form>
        <Form.Group className="mb-1" controlId="adminEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <FormControl
              className="form-control"
              name="adminEmail"
              type="text"
              value={values.adminEmail}
              placeholder="Enter Email"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={"adminEmail"} />
          <Form.Group className="mb-1" controlId="adminName">
            <Form.Label>Name</Form.Label>
            <InputGroup>
              <FormControl
                className="form-control"
                name="adminName"
                type="text"
                value={values.adminName}
                placeholder="Enter Name"
                onChange={handleChange}
                onBlur={handleBlur}

              />
            </InputGroup>
            <DisplayError errors={errors} touched={touched} field={"adminName"} />
          </Form.Group>

          <Form.Group className="mb-1" controlId="adminPhone">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup>
              <FormControl
                className="form-control"
                name="adminPhone"
                type="text"
                value={values.adminPhone}
                placeholder="***-***-****"
                onChange={handleChange}
                onBlur={handleBlur}

              />
            </InputGroup>
            <DisplayError errors={errors} touched={touched} field={"adminPhone"} />
          </Form.Group>

        </Form.Group>
        {/*controlId must match what is defined by the initialValues object*/}
        <Form.Group className="mb-1" controlId="adminPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <FormControl
              className="form-control"
              name="adminPassword"
              type="password"
              value={values.adminPassword}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={"adminPassword"} />
        </Form.Group>
        <Form.Group className="mb-1" controlId="adminPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <FormControl
              className="form-control"
              name="adminPasswordConfirm"
              type="password"
              value={values.adminPasswordConfirm}
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={"adminPasswordConfirm"} />
        </Form.Group>

        <Form.Group className={"mt-3"}>
          <Button onClick={handleSubmit} className="btn btn-primary">Submit</Button>
          {" "}
          <Button
            className="btn btn-danger"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >Reset
          </Button>
        </Form.Group>
      </Form>
      <DisplayStatus status={status} />

    </>


  )
}