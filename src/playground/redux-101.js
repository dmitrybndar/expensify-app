import { createStore } from 'redux';

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});


// Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT': 
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET': 
      return {
        count: 0
      };
    case 'SET':
      return {
        count: typeof action.count === 'number' ? action.count : state.count
      }
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());
// unsubscribe();

store.dispatch(decrementCount( {decrementBy: 10} ));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());


