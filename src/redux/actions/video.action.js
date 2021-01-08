import {
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  SELECT_VIDEO_REQUEST,
  SELECT_VIDEO_SUCCESS,
  SELECT_VIDEO_FAIL,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCH_VIDEOS_REQUEST,
  SEARCH_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_FAIL,
} from "../actionType";
import request from "../../axios";

//main page mostPopular Video
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

//search keyword
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

//get videoId
export const getVideoId = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECT_VIDEO_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    dispatch({
      type: SELECT_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: SELECT_VIDEO_FAIL,
      payload: e.message,
    });
  }
};

//get relatedVideos
export const getRelatedVideoId = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });
    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
    console.log(data);
    console.log(data.items);
  } catch (e) {
    console.log(e.response.data.message);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: e.response.data.message,
    });
  }
};

//serach videos
export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_VIDEOS_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video,channel",
      },
    });
    //  console.log(data);

    dispatch({
      type: SEARCH_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: SEARCH_VIDEOS_FAIL,
      payload: e.message,
    });
  }
};
