import React from "react";
//import { Link, Links } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 20px 50px;
  border: 1px solid gray;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

function Signin() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sign in</Title>
          <Subtitle>continue to the website</Subtitle>
          <Input placeholder="username"></Input>
          <Input type="password" placeholder="password"></Input>
          <Button>sign in</Button>
          <Title>or</Title>
          <Input placeholder="username"></Input>
          <Input placeholder="email"></Input>
          <Input type="password" placeholder="password"></Input>
          <Button>sign up</Button>
          <More>
            English
            <Links>
              <Link>Help</Link>
              <Link>Privacy</Link>
              <Link>Terms</Link>
            </Links>
          </More>
        </Wrapper>
      </Container>
    </>
  );
}

export default Signin;
