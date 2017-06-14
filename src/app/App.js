import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
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

const mapStateToProps = state => state;

const mapDispatchToProps = {};

// @connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <UpperToolbar />
          <MiddleToolbar />
          <Content />
          <BottomToolbar />
        </Container>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
