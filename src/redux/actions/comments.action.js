import {
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_FAIL,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from "../actionType";
import request from "../../axios";

export const getCommentOfVideoById = (id) => async (dispatch) => {
  dispatch({
    type: COMMENT_LIST_REQUEST,
  });

  try {
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });

    dispatch({
      type: COMMENT_LIST_SUCCESS,
      payload: data.items,
    });
    console.log(data);
  } catch (e) {
    dispatch({
      type: COMMENT_LIST_FAIL,
      payload: e.message,
    });
  }
};

//comment add
export const adComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    //neeed request body
    await request.post("/commentThreads", obj, {
      params: {
        part: "snippet",
        videoId: id,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    //생성
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    });
    //불러오기
    setTimeout(() => {
      dispatch(getCommentOfVideoById(id));
    }, 3000);
  } catch (e) {
    dispatch({
      type: CREATE_COMMENT_FAIL,
      payload: e.message,
    });
  }
};
