import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { homeVideosReducer } from "./reducers/videos.reducer";
import { selectedVideoReducer } from "./reducers/videos.reducer";
import { channelDetailReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";
import { relatedVideoReducer } from "./reducers/videos.reducer";
import { searchVideoReducer } from "./reducers/videos.reducer";
import { subscriptionChannelReducer } from "./reducers/videos.reducer";
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
  relatedVideos: relatedVideoReducer,
  searchVideos: searchVideoReducer,
  subscriptionChannel: subscriptionChannelReducer,
});

// const reducer = (initialState) => initialState;

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
