import get from "lodash/get";
import path from "path";

const SET_CREDENTIALS = "siding-box/settings/SET_CREDENTIALS";
const RESET_CREDENTIALS = "siding-box/settings/RESET_CREDENTIALS";
const LOAD_DEFAULTS = "siding-box/settings/LOAD_DEFAULTS";
const LOAD_DEFAULTS_FULFILLED = "siding-box/settings/LOAD_DEFAULTS_FULFILLED";
const SET_CONFIG = "siding-box/settings/SET_CONFIG";

const initialState = {
  username: "",
  host: "",
  password: "",
  directory: null,
  defaults: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CREDENTIALS: {
      return {
        ...state,
        username: action.payload.username,
        host: action.payload.host,
        password: action.payload.password,
      };
    }
    case RESET_CREDENTIALS: {
      return {
        ...state,
        username: "",
        host: "",
        password: "",
      };
    }
    case LOAD_DEFAULTS_FULFILLED: {
      return {
        ...state,
        defaults: action.payload,
        directory:
          state.directory ||
            path.join(
              get(action.payload, ["directories", "documents"]),
              "SidingBox"
            ),
      };
    }
    case SET_CONFIG: {
      return {
        ...state,
        directory: action.payload.directory || state.directory,
      };
    }
    default: {
      return state;
    }
  }
}

export const setCredentials = (credentials = {}) => ({
  type: SET_CREDENTIALS,
  payload: credentials,
});

export const resetCredentials = () => ({
  type: RESET_CREDENTIALS,
});

export const loadDefaults = () => ({
  type: LOAD_DEFAULTS,
  payload: fetch("http://localhost:9999/enviorement").then(data => data.json()),
});

export const setConfig = config => ({
  type: SET_CONFIG,
  payload: config,
});
