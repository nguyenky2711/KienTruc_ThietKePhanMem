import React, { useEffect, useState } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ParkDetail = ({item, onBackClick}) => {
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
  const handleDeletePark = (e) => {
    // xử lý xoá  
    
    console.log("Hãy xoá")
  };
  const handleChangePark = (itemSelected) => {
    //xử lý sửa
    setDisableInput(true)
    console.log('Hãy cập nhật')
    onBackClick()
  };
  const parkEmpty = itemSelected.parkCapacity - itemSelected.parkContained
  return (
    <div className="form-cover">
      <h1>Thông tin bãi xe</h1>
      <div className="staff-infor">
        <div className="infor">
          <Form className="">
            <FormGroup className="infor-item">
              <Label for="exampleText">Tên bãi giữ xe</Label>
              <Input
                type="text"
                name="parkName"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.parkName}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Sức chứa tối đa</Label>
              <Input
                type="number"
                name="parkCapacity"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.parkCapacity}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Mã bãi</Label>
              <Input
                type="text"
                name="parkID"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.parkID}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Đã chứa</Label>
              <Input
                type="number"
                name="parkContained"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.parkContained}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Giá thuê bãi/ngày</Label>
              <Input
                type="number"
                name="parkCostHire"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.parkCostHire}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Còn trống</Label>
              <Input
                type="number"
                name="parkEmpty"
                id="exampleText"
                onChange={handleInputChange}
                value={parkEmpty}
                disabled
              />
            </FormGroup>
          </Form>
          <div className="buttons">
            <button
              type="button"
              onClick={() => handleDeletePark(itemSelected.parkID)}
            >
              Xoá bãi giữ xe
            </button>
            {disableInput ? (
              <button type="button" onClick={() => setDisableInput(false)}>
                Thay đổi thông tin bãi
              </button>
            ) : (
              <button type="button" onClick={() => handleChangePark(itemSelected)}>
                Lưu thay đổi
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetail;
