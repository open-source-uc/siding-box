import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as settings from "./redux/modules/settings";

const mapStateToProps = state => ({
  directory: state.settings.directory,
});

const mapDispatchToProps = { loadDefaults: settings.loadDefaults };

class Electron extends Component {
  static propTypes = {
    children: PropTypes.node,
    loadDefaults: PropTypes.func.isRequired,
    directory: PropTypes.string,
  };

  componentDidMount() {
    this.props.loadDefaults();
  }

  render() {
    return <div {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Electron);
