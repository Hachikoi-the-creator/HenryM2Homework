const { INCREMENTO, DECREMENTO, CHANGE_NAME } = require("./actionTypes.js");

const initialState = {
  counter: 0,
  name: "jhony pata chueca",
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el reducer de cada caso?

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
      return { ...state, counter: state.counter++ };
    case DECREMENTO:
      return { ...state, counter: state.counter++ };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
  }
}

module.exports = { reducer };
