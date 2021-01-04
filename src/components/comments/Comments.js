import React from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
import { v4 as uuidv4 } from "uuid";

function Comments() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img className="rounder-circle mr-3" src="/avartar.png" alt="avartar" />
        <form onSubmit={handleSubmit} className="d-flex flex-grow-1" action="">
          <input
            className="flex-grow-1"
            placeholder="Wirte a comment..."
            type="text"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {[...Array(15)].map(() => (
          <Comment key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
export default Comments;
