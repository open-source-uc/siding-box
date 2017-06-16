import { remote } from "electron";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import * as settings from "../../redux/modules/settings";

const Content = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #EFEFEF;
`;

const Form = styled.form`
  flex-direction: column;
`;

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  setConfig: settings.setConfig,
  setCredentials: settings.setCredentials,
  resetCredentials: settings.resetCredentials,
};

class ViewsSettings extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    setConfig: PropTypes.func.isRequired,
    setCredentials: PropTypes.func.isRequired,
    resetCredentials: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: [props.settings.username, props.settings.host]
        .filter(Boolean)
        .join("@"),
      password: props.settings.password,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      email: [nextProps.settings.username, nextProps.settings.host]
        .filter(Boolean)
        .join("@"),
      password: nextProps.settings.password,
    });
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleCredentialSubmit = event => {
    event.preventDefault();
    this.props.setCredentials({
      username: this.state.email.split("@")[0],
      host: this.state.email.split("@")[1],
      password: this.state.password,
    });
  };

  handleFolderClick = () => {
    const options = {
      title: "Selecciona carpeta de sincronización",
      defaultPath: this.props.settings.directory,
      properties: ["openDirectory", "createDirectory", "promptToCreate"],
    };
    return remote.dialog.showOpenDialog(options, (directories = []) => {
      const directory = directories[0];
      if (directory) this.props.setConfig({ directory });
    });
  };

  render() {
    const { settings } = this.props;
    const filled = settings.username && settings.host && settings.password;

    // Verify values before allowing to save.
    const valid =
      this.state.email.split("@").length === 2 && this.state.password;

    return (
      <Content {...this.props}>
        <Form onSubmit={this.handleCredentialSubmit}>
          <label>
            Usuario:
            <input
              type="text"
              name="email"
              disabled={filled}
              value={this.state.email}
              placeholder="user@uc.cl"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              disabled={filled}
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Guardar" disabled={filled || !valid} />
          <button onClick={this.props.resetCredentials} disabled={!filled}>
            Reset
          </button>
        </Form>
        <hr />
        <div>
          <input type="text" value={settings.directory} disabled />
          <br />
          <button onClick={this.handleFolderClick}>
            Seleccionar carpeta
          </button>
        </div>
      </Content>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewsSettings);
