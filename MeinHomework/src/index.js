import "./sass/main.scss";
import { store } from "./redux/store.js";
import { increment, decrement, changeName } from "./redux/actions";

// * Subscribe and press the notification bell!
store.subscribe(() => {
  console.log("Subscription: ", store.getState());
});

// * Event listeners to btns
// * && Change state w/dispatch() && actions Fns
document.getElementById("name-btn").addEventListener("click", () => {
  const newName = document.getElementById("name-input").value;
  store.dispatch(changeName(newName));
});

document
  .getElementById("plus-btn")
  .addEventListener("click", () => store.dispatch(increment()));

document
  .getElementById("less-btn")
  .addEventListener("click", () => store.dispatch(decrement()));
