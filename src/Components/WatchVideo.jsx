import React from "react";
import "./WatchVideo.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AddRoadIcon from "@mui/icons-material/AddRoad";
const data = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
];
const data1 = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 2,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 3,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 4,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 5,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 6,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 7,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 8,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 9,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
  {
    id: 10,
    videoSrc: "https://www.youtube.com/embed/J0NX6pHkkYo",
    tags: "ronaldo",
    title: "These Cristiano Ronaldo Skills Should Be Illegal",
    views: "1000",
    date: "10 May",
    channelPic:
      "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654775.jpg",
    channelname: "Ronnie7M",
    subscribers: "20000",
    channelDiscription:
      "Cristiano Ronaldo: Best Ankle Breaker And Ridiculous Skills In Football Turn Notifications on and you will never miss a video again🔔",
  },
];
function WatchVideo() {
  return (
    <div className="wacthvideo_container">
      <div className="watchvideo_left">
        {data.map((e) => (
          <div key={e.id}>
            <iframe
              width="695"
              height="450"
              src={e.videoSrc}
              title="YouTube video player"
            ></iframe>
            <div>
              <p
                style={{
                  color: "rgb(54,164,255)",
                  marginBottom: "0px",
                  padding: "0px",
                }}
              >
                #{e.tags}
              </p>
              <h4 style={{ marginBottom: "2px", margin: "0px", padding: "0" }}>
                {e.title}
              </h4>
              <div className="watchVideo_likebtn">
                <div>
                  <p style={{ color: "rgb(121,98,125)" }}>
                    {e.views}Views•{e.date}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                  }}
                >
                  <div>
                    <p style={{ padding: "0" }}>
                      {" "}
                      <ThumbUpOffAltIcon>filled</ThumbUpOffAltIcon>{" "}
                    </p>
                  </div>
                  <div>
                    <p>221k</p>
                  </div>
                  <div>
                    <p style={{ padding: "0" }}>
                      {" "}
                      <ThumbDownOffAltIcon>filled</ThumbDownOffAltIcon>
                    </p>
                  </div>
                  <div>
                    <p>221k</p>
                  </div>
                  <div>
                    <p>
                      <img
                        style={{ width: "25px", height: "20px" }}
                        src="https://cdn-icons.flaticon.com/png/512/2958/premium/2958783.png?token=exp=1636456457~hmac=0e145b00f00f1980fa03c57ec1015832"
                        alt="icons"
                      />
                    </p>
                  </div>
                  <div>
                    <p>SHARE</p>
                  </div>
                  <div>
                    <p style={{ padding: "0" }}>
                      {" "}
                      <AddRoadIcon>filled</AddRoadIcon>
                    </p>
                  </div>
                  <div>
                    <p>SAVE</p>
                  </div>
                  <div>
                    <p>
                      <button style={{ border: "none", background: "none" }}>
                        •••
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="watchVideo_channel">
                <div>
                  {" "}
                  <img
                    src={e.channelPic}
                    alt="channel"
                    className="watchVideo_channelimg"
                  />
                </div>
                <div>
                  <p>{e.channelname}</p>
                  <p>{e.channelDiscription}</p>
                </div>
                <div className="watchVideo_subscribediv">
                  <button className="watchVideo_btn">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="watchvideo_right">
        <div>
          {data1.map((el) => (
            <div key={el.id} className="wactchVideo_right_similar">
              <div style={{ marginTop: "15px" }}>
                <iframe
                  width="200"
                  height="100"
                  src={el.videoSrc}
                  title="YouTube video player"
                ></iframe>
              </div>
              <div>
                <p style={{ marginBottom: "8px", padding: "0" }}>{el.title}</p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  {el.channelname}
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "rgb(148,148,148)",
                  }}
                >
                  {el.views}Views {el.date}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchVideo;
