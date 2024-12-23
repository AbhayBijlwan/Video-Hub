import React from "react";
import styled from "styled-components";
import OIP from "../images/OIP.jpeg";
import Commented from "./commented";

const Container = styled.div``;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
  background-color: transparent;
  padding: 5px;
  outline: none;
  width: 100%;
`;

const New = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function Comments() {
  return (
    <>
      <Container>
        <New>
          <Avatar src={OIP}></Avatar>
          <Input placeholder="add a comment"></Input>
        </New>
        <Commented></Commented>
        <Commented></Commented>
        <Commented></Commented>
        <Commented></Commented>
      </Container>
    </>
  );
}

export default Comments;
