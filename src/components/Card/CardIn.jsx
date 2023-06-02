import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Card/card.css";
const CardIn = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [inputValues, setInputValues] = useState({
    type:'Xe máy',
    licensePlate: '',
    cardId: '',
    timeIn: '',
    park:'Bãi Xe máy',
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
  const park = [
    {
      id: 1,
      name: "Bãi Xe máy",
    },
    {
      id: 2,
      name: "Bãi Xe điện",
    },
    {
      id: 3,
      name: "Bãi Xe oto",
    },
  ];
  const getPic = (e) => {
    // e.prevent
    const randomImageUrl = `https://picsum.photos/300/300?random=${Math.random()}`;
    setImgUrl(randomImageUrl);
    const currentDateTime = new Date().toLocaleString();
    // setDateTime(currentDateTime);
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
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    console.log(inputValues)
  }
  return (
    <div className="card-cover">
      <div className="card-left">
        <p>Hình ảnh lúc vào</p>
        <div className="in-cover">
          <div className="in-pic_item">
            <p>Camera 1</p>
            <img className="in-pic_1" src={imgUrl}></img>
          </div>
          <div className="in-pic_item">
            <p>Camera 2</p>
            <img className="in-pic_2" src={imgUrl}></img>
          </div>
        </div>
      </div>
      <div className="card-right">
        <p>Thông tin thẻ</p>
        <div className="card_detail-cover">
          <Form className="saveInfo getInfo">
            <FormGroup>
              <Label for="exampleText">Loại xe</Label>
              <Input type="select" name="type" id="exampleSelect" onChange={handleChange} value={inputValues.type}>
                {type.map((item, index) => {
                  return <option>{item.name}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Biển số</Label>
              <Input type="text" name="licensePlate" id="exampleText" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Mã thẻ</Label>
              <Input type="text" name="cardId" id="exampleText" onChange={handleChange}/>
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
              <Input type="select" name="park" id="exampleSelect" onChange={handleChange}>
                {type.map((item, index) => {
                  return <option>{item.name}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup className="btnGroup">
              <Button onClick={getPic}>Chụp</Button>
              {showButton && <Button onClick={handleSubmit}>Xác nhận</Button>}
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CardIn;
