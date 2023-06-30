import PocketBase from "pocketbase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, FormGroup, Input, Label } from "reactstrap";
import { updateStaffThunk } from "../store/action/action";
const pb = new PocketBase("https://aplonis-meln.alwaysdata.net");
const authData = await pb
  .collection("users")
  .authWithPassword("shanenoi.org@gmail.com", "32641270013264");

const EmployeeDetail = ({ item, status, onBackClick }) => {
  console.log(item);
  const dispatch = useDispatch();
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  const [disableInput, setDisableInput] = useState(true);
  const [itemSelected, setItemSelected] = useState(item);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (!disableInput) {
      setItemSelected((prevItem) => ({
        ...prevItem,
        [name]: value,
        end_time: status == "Đang làm việc" ? "" : new Date(),
      }));
    }
  };
  const handleChangeStaff = (itemSelected) => {
    // console.log('item');
    dispatch(updateStaffThunk([itemSelected.id, itemSelected])).then((res) => {
      setDisableInput(true);
      onBackClick();
    });
  };
  const urlAvatar = `https://aplonis-meln.alwaysdata.net/api/files/_pb_users_auth_/${itemSelected.id}/${itemSelected.avatar}`;
  return (
    <div className="form-cover">
      <h1>Thông tin người dùng</h1>

      <div className="staff-infor">
        <img
          src={urlAvatar}
          alt=""
          style={{ width: "150px", height: "150px" }}
        />
        <div className="infor">
          <Form className="">
            <FormGroup className="infor-item">
              <Label for="exampleText">Tên nhân viên</Label>
              <Input
                type="text"
                name="name"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.name}
                disabled={disableInput}
              />
            </FormGroup>

            <FormGroup className="infor-item">
              <Label for="exampleText">Số điện thoại</Label>
              <Input
                type="text"
                name="phone_number"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.phone_number}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Trạng thái</Label>
              <Input
                type="select"
                name="status"
                id="exampleSelect"
                onChange={handleInputChange}
                value={itemSelected.status}
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
                name="cccd"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.cccd}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Ngày bắt đầu đi làm</Label>
              <Input
                type="text"
                name="start_time"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.start_time}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Địa chỉ</Label>
              <Input
                type="text"
                name="address"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.address}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Ngày kết thúc làm việc</Label>
              <Input
                type="text"
                name="end_time"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.end_time}
                disabled
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
                disabled
              />
            </FormGroup>
          </Form>
          <div className="buttons">
            {disableInput ? (
              <button type="button" onClick={() => setDisableInput(false)}>
                Thay đổi thông tin nhân viên
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleChangeStaff(itemSelected)}
              >
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
