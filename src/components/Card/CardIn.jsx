import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Card/card.css";
const CardIn = () => {
  const type = [
    {
      id:1,
      name: 'Xe máy',
    },
    {
      id:2,
      name: 'Xe điện',
    },
    {
      id:3,
      name: 'Xe oto',
    },
  ];
  const park = [
    {
      id:1,
      name: 'Bãi Xe máy',
    },
    {
      id:2,
      name: 'Bãi Xe điện',
    },
    {
      id:3,
      name: 'Bãi Xe oto',
    },
  ];
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
          <Form className="saveInfo getInfo">
            <FormGroup>
              <Label for="exampleText">Loại xe</Label>
              <Input type="select" name="select" id="exampleSelect">
                {type.map((item,index)=> {
                  return <option>{item.name}</option>
                })}
              </Input>
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
              <Label for="exampleText">Bãi đậu</Label>
              <Input type="select" name="select" id="exampleSelect">
                {type.map((item,index)=> {
                  return <option>{item.name}</option>
                })}
              </Input>
            </FormGroup>
            <Button>Chụp</Button>
            {/* <Button>Xác nhận</Button> */}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CardIn;
