import {
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
} from "../actionType";
import request from "../../axios";

//main page mostPopular Video
//video
export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "KR",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    //  console.log(data);

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: e.message,
    });
  }
};

//serac keyword
//serach
export const getVideosByCateGories = (keyword) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    //  console.log(data);

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: e.message,
    });
  }
};
