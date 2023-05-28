import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Card/card.css";
const CardOut = () => {
  return (
    <div className="card-cover">
      <div className="card-left">
        <p>Hình ảnh lúc vào</p>
        <div className="in-cover">
          <div className="in-pic_item">
            <p>Camera 1</p>
            <img
              className="in-pic_1"
              src="https://picsum.photos/300/300"
            ></img>
          </div>
          <div className="in-pic_item">
            <p>Camera 2</p>
            <img
              className="in-pic_2"
              src="https://picsum.photos/300/300"
            ></img>
          </div>
        </div>
      </div>
      <div className="card-right">
        <p>Thông tin thẻ</p>
        <div className="card_detail-cover">
          {/* <Form>
            <FormGroup className="getIdCard">
              <Label for="exampleText">Nhập mã thẻ</Label>
              <Input type="text" name="text" id="exampleText" />
              
            </FormGroup>
            <Button>Xác nhận</Button>
          </Form> */}
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
        </div>
      </div>
    </div>
  );
};

export default CardOut;
