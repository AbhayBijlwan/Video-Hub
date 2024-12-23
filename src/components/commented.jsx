import React from "react";
import styled from "styled-components";
import OIP from "../images/OIP.jpeg";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.span`
  font-style: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-style: 12px;
  font-weight: 400;
  margin-left: 5px;
`;

const Text = styled.span`
  font-style: 14px;
`;

function Commented() {
  return (
    <>
      <Container>
        <Avatar src={OIP}></Avatar>
        <Details>
          <Title>
            title
            <Date>1/1/1</Date>
          </Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            veritatis libero expedita et ea labore a, hic dolore! Mollitia vitae
            voluptates quidem repellendus id adipisci consequuntur eligendi
            dolorum, maxime excepturi?
          </Text>
        </Details>
      </Container>
    </>
  );
}

export default Commented;
