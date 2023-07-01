import PocketBase from "pocketbase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, FormGroup, Input, Label } from "reactstrap";
import { updateStaffThunk } from "../store/action/action";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment/locale/vi"; // Import locale của Việt Nam hoặc locale tương ứng
import { format, parseISO } from "date-fns";
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
        end_time: format(endDate, "yyyy-MM-dd HH:mm:ss.SSS'Z'"),
      }));
    }
  };
  const handleChangeStaff = (itemSelected) => {
    console.log(itemSelected);
    dispatch(updateStaffThunk([itemSelected.id, itemSelected])).then((res) => {
      setDisableInput(true);
      onBackClick();
    });
  };
  const urlAvatar = `https://aplonis-meln.alwaysdata.net/api/files/_pb_users_auth_/${itemSelected.id}/${itemSelected.avatar}`;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleChangeStartDate = (date) => {
    setStartDate(date);
  };
  const handleChangeEndDate = (date) => {
    setEndDate(date);
  };
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
              <DatePicker
                selected={startDate}
                onChange={handleChangeStartDate}
                dateFormat="yyyy-MM-dd HH:mm:ss.SSS[Z]"
                value={moment(startDate).format("yyyy-MM-dd HH:mm:ss.SSS[Z]")}
                // minDate={new Date()}
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
              <DatePicker
                selected={endDate}
                onChange={handleChangeEndDate}
                dateFormat="yyyy-mm-dd hh:mm:ss.SSS[z]"
                value={
                  itemSelected.status != "Đang làm việc"
                    ? moment(endDate).format("yyyy-mm-dd hh:mm:ss.SSS[z]")
                    : ""
                }
                minDate={new Date()}
                disabled={itemSelected.status == "Đang làm việc"}
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
