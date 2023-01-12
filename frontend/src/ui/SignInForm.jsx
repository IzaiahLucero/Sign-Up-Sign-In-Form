import {useDispatch} from "react-redux";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import Form from "react-bootstrap/Form";
import React from "react";
import {getAuth} from "../store/auth.js";
import {httpConfig} from "../utils/http-config.js";
import {Formik} from "formik";
import {Button} from "react-bootstrap";
import {DisplayStatus} from "./DisplayStatus.jsx";
import {DisplayError} from "./DisplayError.jsx";
import {useNavigate} from "react-router-dom"

export function SignInFormContent(props){
  const [isChecked,setCheck] = React.useState(false)
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
  return(<>
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          onChange={handleChange} onBlur={handleBlur} name={"email"}
        />
      </Form.Group>
      <DisplayError errors={errors} touched={touched} field={'email'}/>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={handleChange} onBlur={handleBlur} name={"password"}
        />
      </Form.Group>
      <DisplayError errors={errors} touched={touched} field={'password'}/>
      <Form.Group className={"mt-3"}>
        <Button onClick={handleSubmit} className="btn btn-primary">Sign In</Button>
      </Form.Group>
    </Form>
    <DisplayStatus status={status}/>
  </>)
}

export const SignInForm = () => {

  const dispatch = useDispatch()

  const validator = Yup.object().shape({
    email: Yup.string()
      .email("please provide a valid email")
      .required('Email is Required'),
    password: Yup.string()
      .required("Password is Required")
      .min(8, "password must be at least eight characters"),
  });

  const signIn = {
    email: "",
    password: "",
    isOwner: ""
  };
  const navigate = useNavigate()
  const submitSignIn = (values, {resetForm, setStatus}) => {
    const url = '/apis/sign-in-admin'
    httpConfig.post (url,values)
      .then(reply => {
        let {message, type} = reply;
        if(reply.status === 200 && reply.headers["authorization"]) {
          setTimeout (()=> {
            navigate("/dashboard")
          },1500)
          resetForm();
          window.localStorage.removeItem("authorization");
          window.localStorage.setItem("authorization", reply.headers["authorization"]);
          let jwtToken = jwtDecode(reply.headers["authorization"])
          dispatch(getAuth(jwtToken))
        }
        setStatus({message, type});
      });
  };
  return(<>
    <Formik initialValues={signIn} onSubmit={submitSignIn}
            validationSchema={validator}>
      {SignInFormContent}
    </Formik>
  </>)
}

