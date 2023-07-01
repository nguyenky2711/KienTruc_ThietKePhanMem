import React, { useEffect, useRef, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Card/card.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCardInforThunk,
  getCardListThunk,
  getCostThunk,
  updateCardThunk,
} from "../../store/action/action";
import video from "../../../src/Download.mp4";
import { parseISO, getHours } from "date-fns";
const CardOut = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  const [inputValue, setInputValue] = useState("");
  const { cardList, costList } = useSelector((state) => state.slice);
  useEffect(() => {
    dispatch(getCardListThunk());
    dispatch(getCostThunk());
  }, [dispatch]);
  const formData = new FormData();
  const [newData, setNewData] = useState({});
  const getData = (e) => {
    setFlag(true);
    handleGetInfo();
    const tempData = cardList.find((item) => item.id == inputValue);
    setNewData(tempData);
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
    imgRef.current.src = capturedImageURL;
  };

  const handleGetInfo = () => {
    setShowVideo(true);
  };
  const handleSubmit = (formData) => {
    // handleCapture()
    const data = {
      transport_type: newData.type,
      card_id: newData.cardId,
      license_car: newData.licensePlate,
      check_in: newData.check_in,
      check_out: formData.check_out,
      check_in_img: newData.check_in_img,
      check_out_img: imgRef.current.src,
      area_id: newData.area_id,
      total_money: calculatePrice(),
    };
    dispatch(updateCardThunk([newData.id, data])).then((res) =>
      console.log(res)
    );
  };
  const getPic = (e) => {
    // e.prevent
    handleCapture();
    // const currentDateTime = new Date().toLocaleString();
    const { format } = require("date-fns");

    const currentDateTime = format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS'Z'");

    setNewData((prevInputValues) => ({
      ...prevInputValues,
      check_out: currentDateTime,
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  const handleMoney = () => {
    // const hourStart = getHours(parseISO(newData.check_in));
    // const hourtEnd = getHours(parseISO(newData.check_out));
    // console.log(hourStart, hourtEnd);
  };
  function calculatePrice() {
    const costArr = costList.filter(
      (item) => item.transport_type == newData.transport_type
    );
    console.log();
    const pricePerHourDay = costArr.find(
      (item) => item.time == "06:00 - 18:00"
    ).price; // Giá mỗi giờ từ 6:00 - 18:00 (UTC)
    const pricePerHourNight = costArr.find(
      (item) => item.time == "18:00 - 06:00"
    ).price; // Giá mỗi giờ từ 18:00 - 6:00 (UTC)

    const start = new Date(newData.check_in);
    const end = new Date(newData.check_out);

    let price = 0;

    while (start < end) {
      const currentHour = start.getUTCHours();
      const nextHour = (currentHour + 1) % 24;

      if (currentHour >= 6 && currentHour < 18) {
        // Giờ trong khoảng từ 6:00 - 18:00 (UTC)
        price += pricePerHourDay;
      } else {
        // Giờ trong khoảng từ 18:00 - 6:00 (UTC)
        price += pricePerHourNight;
      }

      start.setUTCHours(nextHour);
    }

    return price;
  }

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
            <p>Hình ảnh lúc vào</p>
            <img
              className="in-pic_2"
              src={newData?.check_in_img}
              style={{ width: "220px", height: "220px", background: "#C4C4C4" }}
            ></img>
          </div>
        </div>
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
            <p>Hình ảnh lúc ra</p>
            {/* <img className="in-pic_2" src={imgUrl}></img> */}
            <img
              className="in-pic_2"
              ref={imgRef}
              style={{ width: "220px", height: "220px", background: "#C4C4C4" }}
            />
          </div>
        </div>
      </div>
      <div className="card-right">
        <p>Thông tin thẻ</p>
        <div className="card_detail-cover">
          {!flag ? (
            <Form>
              <FormGroup className="getIdCard">
                <Label for="exampleText">Nhập mã thẻ</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleText"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="btnGroup">
                <Button onClick={getData}>Xác nhận</Button>
              </FormGroup>
            </Form>
          ) : (
            <Form className="saveInfo">
              <FormGroup style={{ display: "none" }}>
                <Label for="exampleText">Loại xe</Label>
                <Input
                  type="text"
                  name="transport_type"
                  id="transport_type"
                  disabled
                  defaultValue={newData?.transport_type}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Loại xe</Label>
                <Input
                  type="text"
                  name="transport_type"
                  id="transport_type"
                  disabled
                  defaultValue={newData?.transport_type}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Biển số</Label>
                <Input
                  type="text"
                  name="license_car"
                  id="license_car"
                  disabled
                  defaultValue={newData?.license_car}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Mã thẻ</Label>
                <Input
                  type="text"
                  name="card_id"
                  id="card_id"
                  disabled
                  defaultValue={newData?.card_id}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Giờ vào</Label>
                <Input
                  type="text"
                  name="check_in"
                  id="check_in"
                  disabled
                  defaultValue={newData?.check_in}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Giờ ra</Label>
                <Input
                  type="text"
                  name="check_out"
                  id="check_out"
                  value={newData?.check_out}
                  disabled
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Thành tiền</Label>
                <Input
                  type="number"
                  name="total_money"
                  id="total_money"
                  value={calculatePrice()}
                  disabled
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="btnGroup">
                <Button onClick={getPic}>Chụp</Button>
                <Button onClick={() => handleSubmit(formData)}>Xác nhận</Button>
              </FormGroup>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardOut;
