import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import ViewsFiles from "./components/Views/Files";
import ViewsNews from "./components/Views/News";
import UpperToolbar from "./components/UpperToolbar";
import BottomToolbar from "./components/BottomToolbar";

import * as router from "./redux/modules/router";

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

const mapDispatchToProps = {
  navigate: router.navigateReplace,
  openExternal: router.openExternal,
};

// @connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  static propTypes = {
    openExternal: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  };

  handleLogoClick = () => this.props.openExternal("https://www.ing.puc.cl");

  handleNavClick = path => this.props.navigate(path);

  render() {
    return (
      <Container>
        <UpperToolbar>
          <UpperToolbar.Logo onClick={this.handleLogoClick} />
          <UpperToolbar.Content />
          <UpperToolbar.News onClick={() => this.handleNavClick("/news")} />
          <UpperToolbar.Tree onClick={() => this.handleNavClick("/files")} />
        </UpperToolbar>
        <Content>
          <Redirect to="/files" />
          <Route exact path="/files" component={ViewsFiles} />
          <Route exact path="/news" component={ViewsNews} />
        </Content>
        <BottomToolbar />
      </Container>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
