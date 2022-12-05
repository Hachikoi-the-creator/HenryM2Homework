/**
 * @dev An action tells the reducer what property of the state to change 'type', and also gives it optional parameters as 'payload'
 */

// * Action's Types
// const UPDATE_API_DATA = "UPDATE_API_DATA";
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

const changeName = (a) => {
  return { type: CHANGE_NAME, payload: "New name :D" };
};

module.exports = {
  incremento,
  decremento,
  changeName,
  INCREMENTO,
  DECREMENTO,
  CHANGE_NAME,
};
