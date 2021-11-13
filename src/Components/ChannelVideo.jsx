import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./ChannelVideo.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {Link} from "react-router-dom"
function ChannelVideo({ name, description, videoUrl }) {
  return (
    <Link to={`/video/${videoUrl}`}>
    <div className="ChannelVideo">
      {/* <img src={"https://via.placeholder.com/450x250"} className="video_image" /> */}
      <video controls width="100%" autoplay class="video-player">
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
            <h6 className="align-middle pt-2">{"random name here"}</h6>
            </div>
          </div>
          <div className="p-2"></div>
        <h5>
          {"0"} views · 1 day ago
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