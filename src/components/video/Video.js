import React from 'react'
import "./_video.scss";
import {AiFillEye, AiFillQqCircle} from 'react-icons/ai';

export default function Video() {
  return (
    <div className="video">
      <div className="video__top" >
        <img src="https://i.ytimg.com/vi/V8kdEWK87cw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB-q1VxdJOlxuMuzAwaoMzhSEvkFw" alt=""/>
        <span>05: 43</span>
      </div>
      <div className="video__title">
        Create appin 5 minutes #made by kim
      </div>
      <div className="video__details">
        <span>
          <AiFillEye/> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/ytc/AAUvwniiB6IUAo29oRsSpadqOyeQVY7c8n71JEkw5zLqOA=s176-c-k-c0x00ffffff-no-rj" alt=""/>
        <p>Rainow kim</p>
      </div>
    </div>
  )
}
