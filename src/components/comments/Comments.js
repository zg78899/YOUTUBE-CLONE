import React, { useEffect, useState } from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  adComment,
  getCommentOfVideoById,
} from "../../redux/actions/comments.action";

function Comments({ videoId, totalComments }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

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
    dispatch(adComment(videoId, text));
    setText("");
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img className="rounded-circle mr-3" src="/avartar.png" alt="avartar" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1" action="">
          <input
            onChange={(e) => setText(e.target.value)}
            className="flex-grow-1"
            placeholder="Wirte a comment..."
            type="text"
            value={text}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
}
export default Comments;
