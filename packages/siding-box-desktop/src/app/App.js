import { shell } from "electron";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { get } from "lodash";

import ViewsFiles from "./components/Views/Files";
import ViewsNews from "./components/Views/News";
import ViewsSettings from "./components/Views/Settings";
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
  display: flex;
  flex: 1;
`;

const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = {
  navigate: router.navigateReplace,
};

class App extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
    openExternal: PropTypes.func.isRequired,
    showItemInFolder: PropTypes.func.isRequired,
  };

  static defaultProps = {
    openExternal: shell.openExternal,
    showItemInFolder: shell.showItemInFolder,
  };

  handleLogoClick = () => this.props.openExternal("https://www.ing.puc.cl");

  handleNavClick = path => this.props.navigate(path);

  render() {
    const { router } = this.props;
    const current = get(router, ["location", "pathname"]);

    return (
      <Container>
        <UpperToolbar onLogoClick={this.handleLogoClick}>
          <UpperToolbar.News
            active={current === "/news"}
            onClick={() => this.handleNavClick("/news")}
          />
          <UpperToolbar.Tree
            active={current === "/files"}
            onClick={() => this.handleNavClick("/files")}
          />
        </UpperToolbar>
        <Content>
          <Redirect to="/files" />
          <Route exact path="/files" component={ViewsFiles} />
          <Route exact path="/news" component={ViewsNews} />
          <Route exact path="/settings" component={ViewsSettings} />
        </Content>
        <BottomToolbar>
          <BottomToolbar.Folder
            onClick={() =>
              this.props.showItemInFolder(
                "/Users/patriciolopez/Repositories/siding-box"
              )}
          />
          <BottomToolbar.Settings
            active={current === "/settings"}
            onClick={() => this.handleNavClick("/settings")}
          />
        </BottomToolbar>
      </Container>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
