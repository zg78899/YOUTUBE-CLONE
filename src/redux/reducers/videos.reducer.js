import { 
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
   HOME_VIDEOS_SUCCESS
   } from "../actionType";


export const homeVideosReducer = (state={
  videos:[],
  loading:false,
  nextPageToken:null,
  activeCategory:'All'
},action)=>{
  const {type,payload} = action;

  switch(type){
    case HOME_VIDEOS_SUCCESS:
     return {
       ...state,
       videos:
       state.activactiveCategory === payload.category ? [...state.videos, ...payload.videos] : payload.videos,
       loading:false,
       nextPageToken:payload.nextPageToken,
       activactiveCategory:payload.category
     };
    case HOME_VIDEOS_FAIL:
     return {
       ...state,
       error:payload,
       loading:false,
     };
    case HOME_VIDEOS_REQUEST:
     return {
       ...state,
       loading:true,
     };
     
     default:
       return state; 
  }
  
}