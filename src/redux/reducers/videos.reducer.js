import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECT_VIDEO_REQUEST,
  SELECT_VIDEO_SUCCESS,
  SELECT_VIDEO_FAIL,
} from "../actionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activactiveCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activactiveCategory: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = {
    loading: true,
    video: null,
  },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SELECT_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECT_VIDEO_SUCCESS:
      return {
        ...state,
        video: payload,
        loading: false,
      };

    case SELECT_VIDEO_FAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
