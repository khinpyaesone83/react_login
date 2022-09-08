import React, { useContext } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "./userContext";

function Login(props) {
  let navigate = useNavigate();
  const userContext = useContext(UserContext);
  const handleLogin = userContext.handleLogin;
  const user = userContext.user;

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <Container>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username is required";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          // console.log(values);
          handleLogin(values);
          navigate("/admin");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Card>
              <h2>Login your account</h2>
              <Input
                placeholder="Username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <Small style={{ color: "red" }}>
                {errors.username && touched.username && errors.username}
              </Small>
              <Input
                placeholder="Password"
                name="password"
                type={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Small style={{ color: "red" }}>
                {errors.password && touched.password && errors.password}
              </Small>
              <Button type="submit">Login</Button>
            </Card>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e4e4e4;
`;
const Card = styled.div`
  background-color: #fff;
  padding: 70px;
  display: flex;
  justify-content: center;
  //   align-items: flex-start;
  flex-direction: column;
  border-radius: 20px;
`;

const Input = styled.input`
  padding: 15px 40px;
  margin-top: 20px;
  margin-bottom: 5px;
  //   margin: 20px;
  border: 1px solid dodgerblue;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
`;
const Button = styled.button`
  padding: 15px 95px;
  outline: none;
  border: none;
  background-color: dodgerblue;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 25px;
  &:hover {
    background-color: #0000ff;
  }
`;

const Small = styled.small`
  color: red;
  justify-content: flex-start;
  margin-left: 22px;
`;
