const redux = require("redux");

//* Store
const createStore = redux.createStore;

//* action's types
const TODO_ADD = "TODO_ADD";
const TODO_REMOVE = "TODO_REMOVE";

//* Actions
function addTodo(text) {
  return {
    type: TODO_ADD,
    payload: text,
  };
}

function removeTodo(index) {
  return {
    type: TODO_REMOVE,
    payload: index,
  };
}

//* state
const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        todos: [...state.todos, action.payload],
      };
    case TODO_REMOVE:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Subscription: ", store.getState());
});

// Calls the reducer, within the Store to update state
store.dispatch(addTodo("Comprar pan"));
store.dispatch(addTodo("Correr"));

store.dispatch(removeTodo(1));

console.log(store.getState());
