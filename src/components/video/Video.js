import React, { useEffect, useState } from 'react'
import "./_video.scss";
import {AiFillEye} from 'react-icons/ai';
import request from '../../axios';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Video({video}) {

  const {
    id,
    snippet:{channelId, channelTitle, title, publishedAt,
    thumbnails:{medium}
  }
} = video;

const [views,setViews] = useState(null);
const [duration,setDuration] = useState(null);
const [channelIcon,setChannelIcon] = useState(null);

const seconds= moment.duration(duration).asSeconds();
const _duration = moment.utc(seconds * 1000).format("mm:ss"); 

//video의 id가 object인 경우에 videoId 아님 id;
const _videoId = id?.videoId || id;

useEffect(()=>{

const get_video_details = async ()=>{
  const {data:{items}} = await request('/videos',{
    params:{
      part:'contentDetails,statistics',
      id:_videoId
    }
  });
  setDuration(items[0].contentDetails.duration);
  setViews(items[0].statistics.viewCount);
  console.log(items[0]);
};  
get_video_details();
},[_videoId]);


useEffect(()=>{
const get_channel_icon = async ()=>{
  const {data:{items}} = await request('/channels',{
    params:{
      part:'snippet',
      id:channelId
    }
  });
  // console.log(items);
  setChannelIcon(items[0].snippet.thumbnails.default)
};  

get_channel_icon();
},[channelId]);



  return (
    <div className="video">
      <div className="video__top" >
        {/* <img src={medium.url} alt="썸네일"/> */}
        <LazyLoadImage src={medium.url} effect="blur" alt="썸네일"/>
        <span className="video__top__duration">{_duration}</span>
      </div>
      <div className="video__title">
        {/* <img src={channelIcon?.url} alt="channnelIcon"/> */}
        <LazyLoadImage src={channelIcon?.url} effect="blur" alt="channnelIcon"/>
        {title}
      </div>
      <div className="video__channel">
        <p>{channelTitle}</p>
      </div>
      <div className="video__details">
        <span>
          <AiFillEye/> {numeral(views).format("0.a")} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
    </div>
  )
}
