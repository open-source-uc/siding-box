const SET_CREDENTIALS = "siding-box/settings/set-credentials";
const RESET_CREDENTIALS = "siding-box/settings/reset-credentials";

const initialState = {
  username: "",
  host: "",
  password: "",
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
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}

export const set = (credentials = {}) => ({
  type: SET_CREDENTIALS,
  payload: credentials,
});

export const reset = () => ({
  type: RESET_CREDENTIALS,
});
