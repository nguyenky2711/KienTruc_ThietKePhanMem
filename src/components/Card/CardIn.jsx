import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Card/card.css";
import video from "../../../src/Download.mp4";
import { useDispatch, useSelector } from "react-redux";
import { createCardInforThunk, getParkThunk } from "../../store/action/action";
const CardIn = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [inputValues, setInputValues] = useState({
    type: "Xe máy",
    licensePlate: "",
    cardId: "",
    timeIn: "",
    park: "",
  });
  const type = [
    {
      id: 1,
      name: "Xe máy",
    },
    {
      id: 2,
      name: "Xe điện",
    },
    {
      id: 3,
      name: "Xe oto",
    },
  ];
  const dispatch = useDispatch();
  const { parkList } = useSelector((state) => state.slice);
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  console.log(userSessionStorage);
  useEffect(() => {
    // dispatch(getParkThunk([userSessionStorage.token]));
    dispatch(getParkThunk());
  }, [dispatch]);
  const getPic = (e) => {
    // e.prevent
    handleCapture();
    // const currentDateTime = new Date().toLocaleString();
    const { format } = require("date-fns");

    const currentDateTime = format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS'Z'");

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      timeIn: currentDateTime,
    }));
    setShowButton(true);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  const handleSubmit = (formData) => {
    const data = {
      transport_type: formData.type,
      card_id: formData.cardId,
      license_car: formData.licensePlate,
      // check_in: formData.timeIn,
      check_in: "2022-01-01 10:00:00.123Z",
      check_out: "",
      check_in_img: imgRef.current.src,
      check_out_img: "https://example.com",
      area_id: formData.park,
    };
    dispatch(createCardInforThunk(data)).then((res) => console.log(res));
    // dispatch(createCardInforThunk([data, userSessionStorage.token])).then((res) => console.log(res));
  };
  const videoRef = useRef(null);
  const imgRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    const capturedImageURL = canvas.toDataURL();
    console.log(capturedImageURL);
    imgRef.current.src = capturedImageURL;
  };

  const handleGetInfo = () => {
    setShowVideo(true);
  };

  // console.log(imgRef)

  return (
    <div className="card-cover">
      <div className="card-left">
        <div className="in-cover">
          <div className="in-pic_item">
            <p>Camera </p>
            {/* <img className="in-pic_1" src={imgUrl}></img> */}
            {/* <VideoCapture videoSource={video}></VideoCapture> */}
            <div
              style={{
                width: "220px",
                height: "220px",
                background: "#C4C4C4",
              }}
            >
              {showVideo && (
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                    background: "#C4C4C4",
                  }}
                >
                  <source src={video} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
          <div className="in-pic_item">
            <p>Hình ảnh vào</p>
            {/* <img className="in-pic_2" src={imgUrl}></img> */}
            <img
              className="in-pic_2"
              ref={imgRef}
              alt=""
              style={{ width: "220px", height: "220px", background: "#C4C4C4" }}
            />
          </div>
        </div>
      </div>
      <div className="card-right">
        <p>Thông tin thẻ</p>
        <div className="card_detail-cover">
          <Form className="saveInfo getInfo">
            <FormGroup>
              <Label for="exampleText">Loại xe</Label>
              <Input
                type="select"
                name="type"
                id="exampleSelect"
                onChange={handleChange}
                value={inputValues.type}
              >
                {type.map((item, index) => {
                  return <option>{item.name}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Biển số</Label>
              <Input
                type="text"
                name="licensePlate"
                id="exampleText"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Mã thẻ</Label>
              <Input
                type="text"
                name="cardId"
                id="exampleText"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Giờ vào</Label>
              <Input
                type="text"
                name="timeIn"
                id="exampleText"
                value={inputValues.timeIn}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Bãi đậu</Label>
              <Input
                type="select"
                name="park"
                id="exampleSelect"
                onChange={handleChange}
              >
                {parkList?.map((item, index) => {
                  // {parkList?.items?.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
            <FormGroup className="btnGroup">
              <Button onClick={getPic}>Chụp</Button>
              {showButton && (
                <Button onClick={() => handleSubmit(inputValues)}>
                  Xác nhận
                </Button>
              )}
              {!showButton && (
                <Button onClick={() => handleGetInfo()}>Lấy thông tin</Button>
              )}
            </FormGroup>
          </Form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CardIn;
