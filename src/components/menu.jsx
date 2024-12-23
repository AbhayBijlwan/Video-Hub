import React from "react";
import styled from "styled-components";
import yt from "../images/yt.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MovieIcon from "@mui/icons-material/Movie";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: black;
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: lightblue;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid white;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid blue;
  color: blue;
  border-radius: 3px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function Menu() {
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Img src={yt}></Img>
              yt
            </Logo>
          </Link>
          <Item>
            <HomeIcon></HomeIcon>
            home
          </Item>
          <Item>
            <ExploreIcon></ExploreIcon>
            explore
          </Item>
          <Item>
            <SubscriptionsIcon></SubscriptionsIcon>
            subscription
          </Item>
          <Hr></Hr>
          <Item>
            <VideoLibraryIcon></VideoLibraryIcon>
            Library
          </Item>
          <Item>
            <HistoryIcon></HistoryIcon>
            history
          </Item>
          <Hr></Hr>
          <Login>
            Sign in to like videos and subscribe
            <Link to="Signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleIcon></AccountCircleIcon>Sign in
              </Button>
            </Link>
          </Login>

          <hr></hr>
          <Item>
            <MusicNoteIcon></MusicNoteIcon>
            Music
          </Item>
          <Item>
            <SportsSoccerIcon></SportsSoccerIcon>
            Sports
          </Item>
          <Item>
            <SportsEsportsIcon></SportsEsportsIcon>
            gaming
          </Item>
          <Item>
            <MovieIcon></MovieIcon>
            movie
          </Item>
          <Item>
            <NewspaperIcon></NewspaperIcon>
            news
          </Item>
          <Item>
            <LiveTvIcon></LiveTvIcon>
            Live
          </Item>
          <Hr></Hr>
          <Item>
            <SettingsIcon></SettingsIcon>
            setting
          </Item>
          <Item>
            <ReportIcon></ReportIcon>
            report
          </Item>
          <Item>
            <HelpOutlineIcon></HelpOutlineIcon>
            help
          </Item>
          <Item>light color</Item>
        </Wrapper>
      </Container>
    </>
  );
}

export default Menu;
