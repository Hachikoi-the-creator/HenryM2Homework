import { createStore } from "redux";
import { reducer } from "./reducer.js";

// * Create the store, and pass the reducer as param
const store = createStore(reducer);

export { store };
