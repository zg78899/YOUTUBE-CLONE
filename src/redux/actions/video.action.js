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
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
  SUBSCRIPTIONS_CHANNEL_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  CHANNEL_VIDEOS_FAIL,
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
    console.log(data);

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
    console.log(e.message);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: e.message,
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

//get subscriptionChannel video
export const getsubscribedChannel = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_REQUEST,
    });
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet,contentDetails",
        mine: true,
        maxResults: 20,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
      payload: data.items,
    });
    console.log(data);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByChannel = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_VIDEOS_REQUEST,
    });

    //1. get upload playlist id
    const {
      data: { items },
    } = await request("/channels", {
      params: {
        part: "contentDetails",
        id: id,
      },
    });

    const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;

    //2.get the video using the id
    const { data } = await request("/playlistItems", {
      params: {
        part: "snippet,contentDetails",
        playlistId: uploadPlaylistId,
        maxResults: 30,
      },
    });
    console.log("items", items);
    dispatch({
      type: CHANNEL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: CHANNEL_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
