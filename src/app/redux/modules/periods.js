const SELECT = "siding-box/periods/select";

const initialState = {
  selected: null,
  options: [
    { value: "2017-1", text: "2017-1" },
    { value: "2017-2", text: "2017-2" },
    { value: "2016-1", text: "2016-1" },
    { value: "2016-2", text: "2016-2" },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selected: action.payload,
      };
    default: {
      return state;
    }
  }
}

export const select = option => ({
  type: SELECT,
  payload: option,
});
