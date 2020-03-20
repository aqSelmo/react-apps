import {setMiddleName, setName} from './unlock';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    MiddleName : setMiddleName,
    setName : setName
});

export default allReducers;