import React from "react";
import "./_comment.scss";
import moment from "moment";

function Comment() {
  return (
    <div className="comment p-2 d-flex">
      <img className="rounder-circle mr-3" src="/avartar.png" alt="avartar" />
      <div className="comment__body">
        <p className="comment__header mb-1">
          KIM JAE HUN •{moment("2021-01-04").fromNow()}
        </p>
        <p className="mb-0">Nice Video</p>
      </div>
    </div>
  );
}
export default Comment;
