import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setAmadeu, setTifu} from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Name = useSelector(state => state.setName.name);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {Name}</h1>
      <button className={Name == 'locked' ? 'btn btn-danger mr-2' : 'btn btn-secondary mr-2'} onClick={() => dispatch(setAmadeu())}>Fechado</button>
      <button className={Name == 'unlocked' ? 'btn btn-success' : 'btn btn-secondary'} onClick={() => dispatch(setTifu())}>Aberto</button>
    </div>
  );
}

export default App;