import React, { useContext, useState } from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import {Context} from "../Context/Context";
import { Link } from "react-router-dom";
import data from "../data.json"


function RecommendedVideos() {

  const {hamburgerChange,handlecheckLogin} = useContext(Context);

  return (
    <div className="recommended">
      <h2>Recommended</h2>

      <div className="recommendedVideo">
        {data.map((el, i) => {
          return <Link key={i} to="/video">
            <VideoCard {...el}/>
                </Link>
        })
        }
      </div>
    </div>
  );
}

export default RecommendedVideos;