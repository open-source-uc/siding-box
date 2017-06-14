import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  flex: 1;
  flex-direction: column;
`;

class ViewsNews extends Component {
  render() {
    return (
      <Content {...this.props}>
        Files
      </Content>
    );
  }
}

export default ViewsNews;
