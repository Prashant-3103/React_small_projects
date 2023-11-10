import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../store/counter';
const Counter = () => {
const dispatch = useDispatch()
const counter = useSelector(state=> state.counter.counter )
const showCounter = useSelector(state=>state.counter.showCounter)
const incrementHnadler = () =>{
dispatch(counterActions.increment())
}

const decrementHnadler = () =>{
dispatch(counterActions.decrement())
}

const increaseHandler = () =>{
dispatch(counterActions.increase(5))
}

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCount())
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
