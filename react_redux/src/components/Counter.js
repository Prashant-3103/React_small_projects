import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
const Counter = () => {
const dispatch = useDispatch()
const counter = useSelector(state=> state.counter )
const showCounter = useSelector(state=>state.showCounter)
const incrementHnadler = () =>{
dispatch({type: 'increment'})
}

const decrementHnadler = () =>{
dispatch({type: 'decrement'})
}

const increaseHandler = () =>{
dispatch({type: 'increase', amount: 5 })
}

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showCounter &&  <div className={classes.value}>{counter}</div>}
<div>
  <button onClick={incrementHnadler}>Increment</button>
  <button onClick={increaseHandler}>Increment by 5 </button>
  <button onClick={decrementHnadler}>Decrement</button>
</div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
