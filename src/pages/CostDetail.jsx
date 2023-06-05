import React, { useEffect, useState } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CostDetail = ({item, typeData, timeData, onBackClick}) => {
  const [disableInput, setDisableInput] = useState(true);
  const [itemSelected, setItemSelected] = useState(item);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (!disableInput) {
      setItemSelected((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };
  
  const handleDeleteCost = (e) => {
    //xử lý xoá
    console.log('Hãy xoá tôi')
  };
  const handleChangeCost = (e) => {
    //xử lý thay đổi

    console.log('Hãy cập nhật')
    setDisableInput(true)
    onBackClick()
  };
  
  return (
    <div className="form-cover">
          <h1>Thông tin chi phí</h1>
          <div className="staff-infor">
            <div className="infor">
              <Form className="">
                <FormGroup className="infor-item">
                  <Label for="exampleText">Loại xe</Label>
                  <Input
                    type="select"
                    name="type"
                    id="exampleSelect"
                    onChange={handleInputChange}
                    value={itemSelected.type}
                    disabled={disableInput}
                  >
                    {typeData.map((item, index) => {
                      return <option>{item.name}</option>;
                    })}
                  </Input>
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Thời gian gửi</Label>
                  <Input
                    type="select"
                    name="time"
                    id="exampleSelect"
                    onChange={handleInputChange}
                    value={itemSelected.time}
                    disabled={disableInput}
                  >
                    {timeData.map((item, index) => {
                      return <option>{item.value}</option>;
                    })}
                  </Input>
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Giá tiền</Label>
                  <Input
                    type="number"
                    name="price"
                    id="exampleText"
                    onChange={handleInputChange}
                    value={itemSelected.price}
                    disabled={disableInput}
                  />
                </FormGroup>
              </Form>
              <div className="buttons">
                <button type="button" onClick={handleDeleteCost}>
                  Xoá chi phí
                </button>
                {disableInput ? (
                  <button type="button" onClick={() => setDisableInput(false)}>
                    Thay đổi chi phí
                  </button>
                ) : (
                  <button type="button" onClick={handleChangeCost}>
                    Lưu chi phí
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* <button onClick={formOn}>{!formStatus? ('Thay đổi thông tin'):('Lưu thông tin')} </button> */}
        </div>
  )
}

export default CostDetail