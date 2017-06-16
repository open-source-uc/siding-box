import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ifProp } from "styled-tools";
import { palette } from "styled-theme";
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
  color: ${ifProp("active", palette("grayscale", 0), palette("grayscale", 2))};
  font-size: 20px;
  cursor: pointer;
  margin-left: 15px;
`;

const News = styled(FANews)`
  color: ${ifProp("active", palette("grayscale", 0), palette("grayscale", 2))};
  font-size: 22px;
  cursor: pointer;
  margin-left: 15px;
  padding-top: 2px;
`;

const Logo = styled.img.attrs({
  src: "./app/assets/images/logo.png",
})`
  color: ${ifProp("active", palette("grayscale", 0), palette("grayscale", 2))};
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = null;

class UpperToolbar extends Component {
  static News = News;
  static Tree = Tree;

  static propTypes = {
    children: PropTypes.any,
    settings: PropTypes.func.object,
    onLogoClick: PropTypes.func.isRequired,
  };

  render() {
    const { children, settings, onLogoClick, ...props } = this.props;
    const isLogged = settings.username && settings.host && settings.password;

    return (
      <Container {...props}>
        <Logo onClick={onLogoClick} />
        <Content>
          <Title>SidingBox</Title>
          {isLogged
            ? <User>{[settings.username, settings.host].join("@")}</User>
            : <User>Iniciar sessión</User>}
        </Content>
        {children}
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpperToolbar);
