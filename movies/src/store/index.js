import {createStore,combineReducers} from 'redux';
import movieReducer from '../reducers/movie_reducer';


const store = createStore(combineReducers({movieReducer:movieReducer}));
export default store;