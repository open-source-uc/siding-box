import React, { Component } from "react";
import styled from "styled-components";

import MiddleToolbar from "../MiddleToolbar";

const Content = styled.div`
  flex: 1;
  flex-direction: column;
`;

class ViewsFiles extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch("http://localhost:9999")
      .then(data => data.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(err => this.setState({ err }));
  }

  render() {
    return (
      <Content {...this.props}>
        <MiddleToolbar />
        {this.state.error}
        {JSON.stringify(this.state.data, null, 2)}
      </Content>
    );
  }
}

export default ViewsFiles;
