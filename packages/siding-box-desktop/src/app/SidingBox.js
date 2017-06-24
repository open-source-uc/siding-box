import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import styled from "styled-components";

import App from "./App";
import Electron from "./Electron";
import Theme from "./styling/Theme";

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default class SidingBox extends Component {
  static propTypes = {
    persistStore: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    options: PropTypes.object,
    purge: PropTypes.bool,
  };

  static defaultProps = {
    options: {},
    purge: false,
  };

  state = {
    ready: false,
  };

  componentWillMount() {
    const { persistStore, store, options, purge } = this.props;

    // Load store from persistence
    const persistor = persistStore(store, options.hydratation, () => {
      // Wipeout persistence is wanted.
      if (purge) {
        console.warn("Purging persistence..."); // eslint-disable-line
        persistor.purge();
      }

      this.setState({ ready: true });
    });
  }

  render() {
    if (!this.state.ready) {
      return <Loading>Loading...</Loading>;
    } else {
      return (
        <Provider store={this.props.store}>
          <Electron>
            <ConnectedRouter history={this.props.history}>
              <Theme>
                <App />
              </Theme>
            </ConnectedRouter>
          </Electron>
        </Provider>
      );
    }
  }
}
