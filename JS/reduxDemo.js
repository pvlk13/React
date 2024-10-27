import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
// store creation
const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];


// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === 'INCREMENT') {
    return { amount: state.amount + 1 }
  } else if (action.type === 'DECREMENT') {
    return { amount: state.amount - 1 }
  } else if (action.type === 'PAYLOAD') {
    return { amount: state.amount + action.payload }
  } else {
    return state
  }

}
// global state
console.log(store.getState());

//Action creator
function increment() {
  return { type: 'INCREMENT' }
}
function decrement() {
  return { type: 'DECREMENT' }
}
function payload(value) {
  return { type: 'PAYLOAD', payload: value }
}

// dispatch action
setInterval(() => {
  store.dispatch(payload(6));// event driven action
  console.log(store.getState());
}, 3000);
