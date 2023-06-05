import React, { useEffect, useState } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const EmployeeDetail = ({item,status,onBackClick }) => {
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
  const handleChangeStaff = (itemSelected) => {
    //xử lý sửa
    
    setDisableInput(true)
    console.log('Hãy cập nhật');
    onBackClick();
  };
  return (
    <div className="form-cover" >
      <div className="staff-infor">
        <img src={`https://picsum.photos/id/${itemSelected.id}/65/65`} alt="" />
        <div className="infor">
          <Form className="">
            <FormGroup className="infor-item">
              <Label for="exampleText">Tên nhân viên</Label>
              <Input
                type="text"
                name="staffName"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.staffName}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Mã số nhân viên</Label>
              <Input
                type="text"
                name="staffId"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.staffId}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Số điện thoại</Label>
              <Input
                type="text"
                name="staffPhone"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.staffPhone}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Trạng thái</Label>
              <Input
                type="select"
                name="staffStatus"
                id="exampleSelect"
                onChange={handleInputChange}
                value={itemSelected.staffStatus}
                disabled={disableInput}
              >
                {status.map((item, index) => {
                  return <option>{item.name}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">CCCD</Label>
              <Input
                type="text"
                name="staffCCCD"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.staffCCCD}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Ngày bắt đầu đi làm</Label>
              <Input
                type="text"
                name="staffDayStart"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.staffDayStart}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Địa chỉ</Label>
              <Input
                type="text"
                name="staffAddress"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.staffAddress}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Ngày kết thúc làm việc</Label>
              <Input
                type="text"
                name="staffDayEnd"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.staffDayEnd}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Chức vụ</Label>
              <Input
                type="text"
                name="role"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.role}
                disabled={disableInput}
              />
            </FormGroup>
          </Form>
          <div className="buttons">
            {disableInput ? (
              <button type="button" onClick={() => setDisableInput(false)}>
                Thay đổi thông tin nhân viên
              </button>
            ) : (
              <button type="button" onClick={() => handleChangeStaff(itemSelected)}>
                Lưu thay đổi
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    // <></>
  );
};

export default EmployeeDetail;
