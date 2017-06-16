import React, { Component } from "react";
import styled from "styled-components";

import MiddleToolbar from "../MiddleToolbar";

const Content = styled.div`
  flex: 1;
  flex-direction: column;
`;

class ViewsFiles extends Component {
  render() {
    return (
      <Content {...this.props}>
        <MiddleToolbar />
      </Content>
    );
  }
}

export default ViewsFiles;
