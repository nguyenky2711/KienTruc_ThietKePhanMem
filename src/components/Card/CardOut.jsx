import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Card/card.css";
import { useDispatch, useSelector } from "react-redux";
import { getCardInforThunk, getCardListThunk } from "../../store/action/action";
const CardOut = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  const [inputValue, setInputValue] = useState("");
  const { cardList } = useSelector((state) => state.slice);
  useEffect(() => {
    dispatch(getCardListThunk());
  }, [dispatch]);
  const formData = new FormData();
  let newData = {};
  const getData = (e) => {
    newData = cardList.find((item) => item.id == inputValue);
    setFlag(true);
  };
  console.log(newData);
  return (
    <div className="card-cover">
      <div className="card-left">
        <p>Hình ảnh lúc vào</p>
        <div className="in-cover">
          <div className="in-pic_item">
            <p>Camera 1</p>
            <img className="in-pic_1" src="https://picsum.photos/300/300"></img>
          </div>
          <div className="in-pic_item">
            <p>Camera 2</p>
            <img className="in-pic_2" src="https://picsum.photos/300/300"></img>
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
              <Button onClick={getData}>Xác nhận</Button>
            </Form>
          ) : (
            <Form className="saveInfo">
              <FormGroup>
                <Label for="exampleText">Loại xe</Label>
                <Input type="text" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Biển số</Label>
                <Input type="text" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Mã thẻ</Label>
                <Input type="text" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Giờ vào</Label>
                <Input type="text" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Giờ ra</Label>
                <Input type="text" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Thành tiền</Label>
                <Input type="text" name="text" id="exampleText" />
              </FormGroup>
              <Button>Xác nhận</Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardOut;
