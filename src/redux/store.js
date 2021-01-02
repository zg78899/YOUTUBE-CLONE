import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/auth.reducer';



// const initialState = {
//   name:'Sumit',
//   age:21
// };;
const rootReducer = combineReducers({
  auth:authReducer
})

// const reducer = (initialState) => initialState;

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)));
export default store;