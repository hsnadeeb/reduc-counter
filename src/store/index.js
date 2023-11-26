import {createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit';

const initialState= {counter:0, showCounter: true};

createSlice({
  name: 'counter',
  initialState,
  reducers:{
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;

    },
    DECREMENTBY5(state){
      state.counter-=5;
    },
    INCREMENTBY5(state){
      state.counter+=5;
    },
    increase(state, action){
      state.counter=state.counter+ action.amount;
    },
    toggleCounter(){
      state.showCounter=!state.showCounter;
    },
  }

})

const counterReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'increment':
          return {
            counter: state.counter + 1,
            showCounter: state.showCounter
          };
        case 'decrement':
          return {
            counter: state.counter - 1,
            showCounter: state.showCounter
          };
        case 'INCREMENTBY5':
          return {
            counter: state.counter + 5,
            showCounter: state.showCounter
          };
          case 'increase':
            return {
              counter: state.counter + action.amount,
              showCounter: state.showCounter
              
            };
        case 'DECREMENTBY5':
          return {
            counter: state.counter - 5,
            showCounter: state.showCounter
          };

          case 'toggle':
            return{
              showCounter: !state.showCounter,
              counter: state.counter

            }
        
        default:
          return state;
      }
}

const store = createStore(counterReducer);

export default store;