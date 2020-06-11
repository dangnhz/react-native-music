import {combineReducers} from 'redux';
import search from './searchReducer';
import video from './videoReducer';

const rootReducer = combineReducers({
  search,
  video,
});

export default rootReducer;
