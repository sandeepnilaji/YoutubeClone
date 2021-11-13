import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./ChannelVideo.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {Link} from "react-router-dom"

const thumbs = [
  "https://www.ilyricshub.com/wp-content/uploads/2020/09/tu-aake-dekhle-king-300x169.jpg",
  "https://punjabilyrics.in/wp-content/uploads/2021/02/0-2-6.jpg",
  "https://i.pinimg.com/564x/0c/11/ed/0c11ed375827c4f2ed51c259c912393b.jpg",
  "https://www.hinditracks.in/wp-content/uploads/2017/07/nazm-nazm.jpg",
  "https://www.moviesavailableon.com/images/movies/khatta_meetha_h.jpg",
  "https://c1.wallpaperflare.com/preview/993/374/570/technology-developer-touch-finger.jpg",
  "https://cdn1.dotesports.com/wp-content/uploads/2020/12/18110404/VAL-Agent-14-2048x1152.jpg",
  "https://c1.wallpaperflare.com/preview/595/1003/783/code-coder-coding-computer.jpg",
  "https://i.stack.imgur.com/ac0r7.png"
]



function ChannelVideo ({name, views, channel,thumbnail, description, videoUrl, i}) {
  return (
    <Link to={`/video/${videoUrl}`}>
    <div className="ChannelVideo">
      {/* <img src={"https://via.placeholder.com/450x250"} className="video_image" /> */}
        <video controls width="100%" height="250"  autoplay class="video-player" poster={thumbs[i%thumbs.length]}>
        <source src={`http://localhost:8080/api/video/${videoUrl}`} />
      </video>
      <div className="channelVideo_text">
        <h2 className="light-text">{name}</h2>
          <div className="p-3"></div>
          <div className="row m-0 p-0">
            <div className="col-1">
            <Avatar src={"https://via.placeholder.com/50x50"}/>
            </div>
            <div className="col-5 align-middle">
            <h6 className="align-middle pt-2">{channel}</h6>
            </div>
          </div>
          <div className="p-2"></div>
        <h5>
          {views} views · 1 day ago
        </h5>
        <div className="video_logo"></div>
        <p>{description}</p>
        <Button variant="contained" className="new">New</Button>
      </div>
      </div>
    </Link>
  );
}

export default ChannelVideo;