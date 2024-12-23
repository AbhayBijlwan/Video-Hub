import React from "react";
import styled from "styled-components";
import raze from "../images/raze.jpg";
import OIP from "../images/OIP.jpeg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  width: 100%;
  background-color: #999;
  gap: 10px;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const Display = styled.img`
  width: 36px;
  border-radius: 50%;
  height: 36px;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Text = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;
const Name = styled.h2`
  font-style: 14px;
  margin: 9px 0px;
  color: black;
`;
const Other = styled.div`
  font-style: 14px;
  color: black;
`;

function Cards({ type }) {
  return (
    <>
      <Link to="/video" style={{ textDecoration: "none" }}>
        <Container type={type}>
          <Image type={type} src={raze}></Image>
          <Details type={type}>
            <Display type={type} src={OIP}></Display>
            <Text>
              <Title>sharing</Title>
              <Name>abhay</Name>
              <Other>views</Other>
            </Text>
          </Details>
        </Container>
      </Link>
    </>
  );
}

export default Cards;
