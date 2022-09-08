import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home(props) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>
          <Button onClick={handleClick}>Login</Button>
        </NavItem>
      </Nav>
      <Container>
        <h1>Home Section</h1>
      </Container>
    </>
  );
}

export default Home;

const Nav = styled.div`
  height: 70px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  font-size: 20px;
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
