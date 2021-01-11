import React, { useEffect, useState } from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentOfVideoById,
} from "../../redux/actions/comments.action";
import InfiniteScroll from "react-infinite-scroll-component";

function Comments({ videoId, totalComments }) {
  const [text, setText] = useState("");
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentsList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const handleComment = (e) => {
    e.preventDefault();

    if (text.length === 0) return;

    dispatch(addComment(videoId, text));
    setText("");
  };

  const fetchData = (load) => {
    if (comments.length >= 100) {
      setLoad(false);
      return;
    }
    if (load) {
      setTimeout(() => {
        dispatch(getCommentOfVideoById(videoId));
      }, 3000);
    } else return;
  };

  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img className="rounded-circle mr-3" src="/avartar.png" alt="avartar" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1" action="">
          <input
            className="flex-grow-1"
            placeholder="공개 댓글 추가..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">입력</button>
        </form>
      </div>

      <div className="comments__list">
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={comments.length}
          next={fetchData}
          hasMore={load}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
        >
          {_comments?.map((comment, i) => (
            <Comment comment={comment} key={i} />
          ))}
        </InfiniteScroll>
        <span
          className="comment__show-more d-flex justify-content-center align-items-center"
          onClick={() => setLoad(!load)}
        >
          더보기
        </span>
      </div>
    </div>
  );
}
export default Comments;
