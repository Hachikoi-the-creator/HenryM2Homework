// * Action's Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CHANGE_NAME = "CHANGE_NAME";

// * Actions
const increment = () => {
  return { type: INCREMENT };
};

const decrement = () => {
  return { type: DECREMENT };
};

const changeName = (newName) => {
  return { type: CHANGE_NAME, payload: newName };
};

export { INCREMENT, DECREMENT, CHANGE_NAME, increment, decrement, changeName };
