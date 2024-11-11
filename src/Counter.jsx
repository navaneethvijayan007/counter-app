import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement, reset, incrementByAmount } from './redux/counterSlice'; // Import incrementByAmount
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const { count } = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrementAmount = () => {
    if (amount) {
      // Dispatch action
      dispatch(incrementByAmount(+amount));
    } else {
      alert("Please enter a valid amount!!!");
    }
  }
  
  return (
    <>
      <div className="app-container">
        <h2 className='head1'>Counter App</h2>
        <div className="counter-container">
          <h1>{count}</h1>
          <div className="button-group">
            <button onClick={() => dispatch(decrement())} className="btn btn-danger" id="btn1">Decrement</button>
            <button onClick={() => dispatch(reset())} className="btn btn-secondary" id="btn2">Reset</button>
            <button onClick={() => dispatch(increment())} className="btn btn-success" id="btn3">Increment</button>
          </div>
          <div className="form-container">
            <input onChange={e => setAmount(e.target.value)}
              type="text"
              placeholder="Enter any Number"
              className="custom-input"
            />
            <button onClick={handleIncrementAmount} className="btn btn-primary increment-btn">
              INCREMENT BY AMOUNT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;