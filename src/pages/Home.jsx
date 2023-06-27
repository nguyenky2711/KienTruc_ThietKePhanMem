import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import CardIn from "../components/Card/CardIn";
import CardOut from "../components/Card/CardOut";
import video from "../../src/Download.mp4";

const Home = () => {
  const [category, setCategory] = useState("IN");
  const [renderIn, setRenderIn] = useState(true);
  const [renderOut, setRenderOut] = useState(false);

  useEffect(() => {
    if (category === "IN") {
      setRenderIn(true);
      setRenderOut(false);
    }
    if (category === "OUT") {
      setRenderIn(false);
      setRenderOut(true);
    }
  }, [category]);

  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleGetInfo = () => {
    videoRef.current.play();
    videoRef.current.loop = true;
    setIsVideoPlaying(true);
  };
  
  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    const dataUrl = canvas.toDataURL(); // Tạo URL dưới dạng dữ liệu base64
    setCapturedImage(dataUrl);
    setIsVideoPlaying(false);
  
    // Gửi dữ liệu base64 đến máy chủ và lưu thành tệp hoặc địa chỉ URL tùy thuộc vào nhu cầu của bạn
    // ...
  };

  const handleReload = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
    setCapturedImage(null);
  };
  console.log(capturedImage);
  
  return (
    <div className="container">
      <div className="navbar">
        <button
          className={`all-btn ${category === "IN" ? "isBtnActive" : ""}`}
          onClick={() => setCategory("IN")}
        >
          Quẹt thẻ vào
        </button>
        <button
          className={`all-btn ${category === "OUT" ? "isBtnActive" : ""}`}
          onClick={() => setCategory("OUT")}
        >
          Quẹt thẻ ra
        </button>
      </div>
      {renderIn && <CardIn />}
      {renderOut && <CardOut />}
      {/* <div>
        <video ref={videoRef}>
          <source src={video} type="video/mp4" />
        </video>

        {isVideoPlaying ? (
          <button onClick={handleReload}>Tải lại</button>
        ) : (
          <button onClick={handleGetInfo}>Lấy thông tin</button>
        )}

        <button onClick={handleCapture}>Chụp</button>

        {capturedImage ? <img src={capturedImage} alt="Captured" /> : null}
      </div> */}
    </div>
  );
};

export default Home;
