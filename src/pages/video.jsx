import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import OIP from "../images/OIP.jpeg";
import Comments from "../components/comments";
import Cards from "../components/Cards";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const Vwrapper = styled.div``;

const Title = styled.h1`
  font-style: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span``;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid black;
`;

const Recommend = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  font-weight: 500;
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-style: 20px;
`;

const Description = styled.span`
  font-style: 14px;
`;

function Video() {
  return (
    <>
      <Container>
        <Content>
          <Vwrapper>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              width="560"
              height="315"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Vwrapper>
          <Title>Test video</Title>
          <Details>
            <Info>views</Info>
            <Buttons>
              <Button>
                <ThumbUpOutlined></ThumbUpOutlined>123
              </Button>
              <Button>
                <ThumbDownAltOutlined></ThumbDownAltOutlined>dislike
              </Button>
              <Button>
                <ReplyOutlined></ReplyOutlined>share
              </Button>
              <Button>
                <AddTaskOutlined></AddTaskOutlined>save
              </Button>
            </Buttons>
          </Details>
          <Hr></Hr>
          <Channel>
            <ChannelInfo>
              <Image src={OIP}></Image>
              <ChannelDetails>
                <ChannelName>Yt</ChannelName>
                <ChannelCounter>200k subscriber</ChannelCounter>
                <Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet tempore corporis dignissimos minima inventore illo
                  modi fugit, nam rem architecto quisquam accusamus aliquid
                  voluptatum dolores labore sit aliquam natus facere!
                </Description>
              </ChannelDetails>
            </ChannelInfo>
            <Subscribe>subscribe</Subscribe>
          </Channel>
          <Hr></Hr>
          <Comments></Comments>
        </Content>
        <Recommend>
          <Cards type="sm"></Cards>
          <Cards type="sm"></Cards>
          <Cards type="sm"></Cards>
          <Cards type="sm"></Cards>
          <Cards type="sm"></Cards>
          <Cards type="sm"></Cards>
          <Cards type="sm"></Cards>
          <Cards type="sm"></Cards>
        </Recommend>
      </Container>
    </>
  );
}

export default Video;
