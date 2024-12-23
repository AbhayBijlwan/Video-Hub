import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: lightblue;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid white;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid blue;
  color: blue;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function Navbar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="search"></Input>
            <SearchIcon></SearchIcon>
          </Search>
          <Link to="Signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleIcon></AccountCircleIcon>Sign in
            </Button>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}

export default Navbar;
