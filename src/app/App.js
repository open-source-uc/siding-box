import React, { Component } from "react";
import styled from "styled-components";

import UpperToolbar from "./components/UpperToolbar";
import MiddleToolbar from "./components/MiddleToolbar";
import BottomToolbar from "./components/BottomToolbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <UpperToolbar />
        <MiddleToolbar />
        <Content />
        <BottomToolbar />
      </Container>
    );
  }
}

export default App;
