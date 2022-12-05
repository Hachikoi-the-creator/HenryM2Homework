import "./sass/main.scss";
const { createStore } = require("redux");

// * Initial state
const initialState = {
  counter: 0,
  name: "jhony pata chueca",
};

// * Action's Types
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";
const CHANGE_NAME = "CHANGE_NAME";

// * Actions
const incremento = () => {
  return { type: INCREMENTO };
};

const decremento = () => {
  return { type: DECREMENTO };
};

const changeName = (newName) => {
  return { type: CHANGE_NAME, payload: newName };
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
    case INCREMENTO:
      return { ...state, counter: state.counter + 1 };
    case DECREMENTO:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
  }
}

// * Create the store, and pass the reducer as param
const store = createStore(reducer);

// * Subscribe and press the notification bell!
store.subscribe(() => {
  console.log("Subscription: ", store.getState());
});

// * Event listeners to btns
document
  .getElementById("name-btn")
  .addEventListener("click", changeNameHandler);
document.getElementById("plus-btn").addEventListener("click", plusBtnHandler);
document.getElementById("less-btn").addEventListener("click", LessBtnHandler);

// * Change state w/dispatch() && actions Fns
function changeNameHandler() {
  const newName = document.getElementById("name-input").value;
  store.dispatch(changeName(newName));
}

function plusBtnHandler() {
  store.dispatch(incremento());
}
function LessBtnHandler() {
  store.dispatch(decremento());
}
