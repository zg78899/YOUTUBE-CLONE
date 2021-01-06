import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { homeVideosReducer } from "./reducers/videos.reducer";
import { selectedVideoReducer } from "./reducers/videos.reducer";
import { channelDetailReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";
// const initialState = {
//   name:'Sumit',
//   age:21
// };;
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailReducer,
  commentsList: commentListReducer,
});

// const reducer = (initialState) => initialState;

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
