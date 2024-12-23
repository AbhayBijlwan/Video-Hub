import "./App.css";

import styled from "styled-components";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Home } from "@mui/icons-material";
import Video from "./pages/video";
import Home from "./pages/home";
import Signin from "./pages/Signin";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Menu></Menu>
          <Main>
            <Navbar></Navbar>
            <Wrapper>
              <Routes>
                <Route path="/">
                  {/* //we are visiting index page */}
                  <Route index element={<Home></Home>} />
                  <Route path="signin" element={<Signin></Signin>} />
                  <Route path="video" element={<Video></Video>}></Route>
                  <Route path=":id" element={<Video></Video>}></Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
