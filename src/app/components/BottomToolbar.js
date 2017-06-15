import React, { Component } from "react";
import styled from "styled-components";
import FARefresh from "react-icons/lib/fa/refresh";
import FACheck from "react-icons/lib/fa/check";
import FAWarning from "react-icons/lib/fa/exclamation-triangle";
import FAError from "react-icons/lib/fa/exclamation-circle";
import FACogs from "react-icons/lib/fa/cogs";
import FAFolder from "react-icons/lib/fa/folder";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  max-height: 30px;
  min-height: 30px;
  flex: 1;
  background-color: #EFEFEF;
  border-top: solid 1px rgba(104,104,104,.25);
  padding: 0 12px;
  color: #808080;
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

const Refresh = styled(FARefresh)`
  font-size: 15px;
`;

const Check = styled(FACheck)`
  font-size: 15px;
`;

const Warning = styled(FAWarning)`
  font-size: 15px;
`;

const Danger = styled(FAError)`
  font-size: 15px;
`;

const Refreshing = props =>
  <Status {...props}>
    <Refresh />
    <Text>Syncronizando...</Text>
  </Status>;

const Done = props =>
  <Status {...props}>
    <Check />
    <Text>Todo en orden</Text>
  </Status>;

const Errored = props =>
  <Status {...props}>
    <Danger />
    <Text>Algo salió mal</Text>
  </Status>;

const Outdated = props =>
  <Status {...props}>
    <Warning />
    <Text>No se está actualizado</Text>
  </Status>;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

// Bigger click area with hack.
const Settings = styled(FACogs)`
  font-size: 15px;
  cursor: pointer;
  padding: 5px;
  margin: -5px;
  margin-left: 7px;
`;

// Bigger click area with hack.
const Folder = styled(FAFolder)`
  font-size: 15px;
  cursor: pointer;
  padding: 5px;
  margin: -5px;
  margin-left: 7px;
`;

class BottomToolbar extends Component {
  constructor(props) {
    super(props);
  }

  handleRefresh = () => {};

  renderStatus = status => {
    switch (status) {
      case "refreshing":
        return <Refreshing />;
      case "done":
        return <Done />;
      case "outdated":
        return <Outdated />;
      case "errored":
        return <Errored />;
      default:
        return null;
    }
  };

  render() {
    const status = "refreshing";

    return (
      <Container>
        {this.renderStatus(status)}
        <Buttons>
          <Folder />
          <Settings />
        </Buttons>
      </Container>
    );
  }
}

export default BottomToolbar;
