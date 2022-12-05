import { INCREMENT, DECREMENT, CHANGE_NAME } from "./actions.js";

// * Initial state
const initialState = {
  counter: 0,
  name: "jhony pata chueca",
};

/**
 *
 * @param {Object} state Previous state
 * @param {String} action what we will do to the state
 * @returns {Object} updated state, after changes
 */
//* changes state, based on past state|defaultState
function reducer(state = initialState, action) {
  // depending on the kind of action we want to do, we will change X state, in one way (may need action.payload)
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
  }
}

export { reducer };
