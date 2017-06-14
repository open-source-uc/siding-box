import React, { Component } from "react";
import styled from "styled-components";
import FATree from "react-icons/lib/fa/sitemap";
import FANews from "react-icons/lib/fa/newspaper-o";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  max-height: 48px;
  min-height: 48px;
  flex: 1;
  background-color: #EFEFEF;
  border-bottom: solid 1px rgba(104,104,104,.25);
  padding: 0 12px;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 8px;
`;

const Title = styled.h1`
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-top: 1px;
  margin-bottom: 2px;
  cursor: pointer;
`;

const User = styled.h2`
  font-size: 8px;
  margin: 0;
  padding: 0;
  color: blue;
  cursor: pointer;
`;

const Tree = styled(FATree)`
  font-size: 20px;
  cursor: pointer;
  margin-left: 15px;
  color: #808080;
`;

const News = styled(FANews)`
  color: #808080;
  font-size: 22px;
  cursor: pointer;
  margin-left: 15px;
  padding-top: 2px;
`;

const Logo = styled.img`
  color: #808080;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

Logo.defaultProps = {
  src: "./assets/images/logo.png",
};

class UpperToolbar extends Component {
  static Logo = Logo;
  static Content = Content;
  static News = News;
  static Tree = Tree;
  static Content = props =>
    <Content {...props}>
      <Title>
        SidingBox
      </Title>
      <User>
        pelopez2@uc.cl
      </User>
    </Content>;

  render() {
    return <Container {...this.props} />;
  }
}

export default UpperToolbar;
