import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./userContext";

function Admin(props) {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Nav>
        <NavItem>Admin</NavItem>
        <NavItem>
          <Button onClick={handleLogout}>Logout</Button>
        </NavItem>
      </Nav>
      <Container>
        <h1>Admin Section</h1>
      </Container>
    </>
  );
}

export default Admin;

const Nav = styled.div`
  height: 70px;
  background: #000;
  padding: 0px 30px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Container = styled.div`
  margin: 30px;
`;

const NavItem = styled.div``;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: dodgerblue;
  color: #fff;
`;
