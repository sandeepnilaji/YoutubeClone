import {Link} from "react-router-dom"
import React from "react";
import { Avatar, Button } from "@material-ui/core";
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {useState,useEffect} from "react"
import "./Search.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import ChannelVideo from "./ChannelVideo";
import videoData from "../data.video.json"

function Trending () {
     const [videos,setVideos] = useState([]);
     const getVideos = async()=>{
          const result = await fetch("http://localhost:8080/api/video");
          const data = await result.json();
          setVideos(data.videos);
     }
  useEffect(()=>{
    getVideos();
  },[])
  return (
    <div className="searchPage">
      <hr />
     <div className="text-left">
          <div className="row">
          <div className="col-2"> <Avatar className="channelRow_logo" src={"https://www.youtube.com/img/trending/avatar/trending_avatar.png"} alt="" />
          </div>
          <div className="col-8 align-middle pt-4"><h2 className="m- text-left mt-3 p-0">
               {"Trending Videos"}
          </h2>
          </div>
          </div>
    </div>
      <hr />
            <h5>Latest In Trending</h5>

            {videos ? videos.map((el, i) => {
                 console.log(el)
                 return <Link key={i} to="/video">
                      <ChannelVideo {...el} videoUrl={el.videopath} i={i} />
                 </Link>;
            }):"Loading"}
    </div>
  );
}

export default Trending;

/*

{/*
import {Link} from "react-router-dom"
import { Avatar, Button } from "@material-ui/core";
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {useEffect,useState} from "react"
import "./Search.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import ChannelVideo from "./ChannelVideo";
import videoData from "../data.video.json"
import VideoCard from "./VideoCard";

function Trending() {
  const [videos,setVideos] = useState();
  const getVideos = async(req,res)=>{
    const result = await fetch("http://localhost:8080/api/video");
    const data = await result.json();
    setVideos(data.videos);
  }

  useEffect(()=>{
    getVideos();
  },[])

     if (videos) {
          return (
               <div className="searchPage">
                    <hr />
                    <div className="text-left">
                         <div className="row">
                              <div className="col-2"> <Avatar className="channelRow_logo" src={"https://www.youtube.com/img/trending/avatar/trending_avatar.png"} alt="" />
                              </div>
                              <div className="col-8 align-middle pt-4"><h2 className="m- text-left mt-3 p-0">
                                   {"Trending Page"}
                              </h2>
                              </div>
                         </div>
                    </div>
                    <hr />
                    <h5>Latest In Trending</h5>
                    {videos.map(el => {
                         console.log('className:', el.views);
                         return (
                              //     <video controls autoplay width="300" class="video-player">
                              //     <source src={`http://localhost:8080/api/video/${el.videopath}`}/>
                              // </video>

                              <div className="recommended">
                                   {/* <h2>Recommended</h2> *
/*
</h4>
                                   <div className="recommendedVideo">
                                        <Link to={`/video/${el.videopath}`}>
                                             <VideoCard
                                                  title={el.name}
                                                  views={el.views}
                                                  videoUrl={el.videopath}
                                                  timestamp="10 days ago"
                                                  image="https://i.ytimg.com/vi/tOXMlseYc7E/maxresdefault.jpg"
                                                  channelImage="https://yt3.ggpht.com/a/AATXAJyAtaR5kNZ5b7-4ytyB2NOnmPYRO9IXqHHxOBRH=s900-c-k-c0x00ffffff-no-rj"
                                                  channel="Indie Music Label"
                                             />
                                        </Link>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          );
     } else {
          return <h4>
     }
}

export default Trending; */
