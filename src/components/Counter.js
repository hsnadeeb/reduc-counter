import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: 'INCREMENTBY5' });
    console.log(counter);
  };

  const decrementBy5Handler = () => {
    dispatch({ type: 'DECREMENTBY5' });
    console.log(counter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementBy5Handler}>Increment By 5</button>
      <button onClick={decrementBy5Handler}>Decrement By 5</button>
    </main>
  );
};

export default Counter;
