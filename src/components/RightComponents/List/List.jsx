import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/list.css";
import SearchTitle from "./SearchTitle";
import HeaderList from "./HeaderList";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ListItem from "./ListItem";

// import Font
const List = () => {
  const status = [
    {
      id: 1,
      name: "Đang làm việc",
    },
    {
      id: 2,
      name: "Đã nghỉ",
    },
  ];
  const [staffData, setStaffData] = useState({
    staffImg: "https://picsum.photos/150/250",
    staffName: "Nguyen Van A",
    staffId: "Abc123",
    staffPhone: "012213123",
    staffStatus: "Đang làm việc",
    staffCCCD: "0123123141",
    staffDayStart: "12/05/2020",
    staffAddress: "Thủ đức",
    staffDayEnd: "",
    role: "Nhân viên",
  });
  const [newStaffData, setNewStaffData] = useState({
    // id:'',
    staffName: "",
    staffId: "",
    staffPhone: "",
    staffStatus: "",
    staffCCCD: "",
    staffDayStart: "",
    staffAddress: "",
    staffDayEnd: "",
    role: "",
    staffImg: "",
  });
  const [id, setId] = useState(5);
  const [disable, setDisable] = useState(true);
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [form, setForm] = useState(false);
  const [activate, setActivate] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      staffName: "Nguyen Van A",
      staffId: "Abc123",
      staffPhone: "012213123",
      staffStatus: "Đang làm việc",
      staffCCCD: "0123123141",
      staffDayStart: "12/05/2020",
      staffAddress: "Thủ đức",
      staffDayEnd: "",
      role: "Nhân viên",
      staffImg: `https://picsum.photos/id/1/65/65`,
    },
    {
      id: 2,
      staffName: "Nguyen Van B",
      staffId: "Abc123",
      staffPhone: "012213123",
      staffStatus: "Đang làm việc",
      staffCCCD: "0123123141",
      staffDayStart: "12/05/2020",
      staffAddress: "Thủ đức",
      staffDayEnd: "",
      role: "Nhân viên",
      staffImg: `https://picsum.photos/id/2/65/65`,
    },
    {
      id: 3,
      staffName: "Nguyen Van C",
      staffId: "Abc123",
      staffPhone: "012213123",
      staffStatus: "Đang làm việc",
      staffCCCD: "0123123141",
      staffDayStart: "12/05/2020",
      staffAddress: "Thủ đức",
      staffDayEnd: "",
      role: "Nhân viên",
      staffImg: `https://picsum.photos/id/3/65/65`,
    },
    {
      id: 4,
      staffName: "Nguyen Van D",
      staffId: "Abc123",
      staffPhone: "012213123",
      staffStatus: "Đang làm việc",
      staffCCCD: "0123123141",
      staffDayStart: "12/05/2020",
      staffAddress: "Thủ đức",
      staffDayEnd: "",
      role: "Nhân viên",
      staffImg: `https://picsum.photos/id/4/65/65`,
    },
  ]);

  const handleRemove = () => {
    setActivate(!activate);
  };
  const handleAdd = () => {
    setAddForm(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewStaffData((prevData) => ({
      ...prevData,
      staffImg: `https://picsum.photos/id/${id}/65/65`,
      id: id,
      [name]: value,
    }));
  };
  // const formOn = () => {
  //   setDisable(!disable);
  //   setFormStatus(!formStatus);
  // };
  const handleSelectedItem = (item) => {
    // setSelectedItemData(item)
    console.log(123)
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setId(id + 1);
    setData((prevData) => prevData.concat(newStaffData));
    // setNewStaffData({})
    setAddForm(false);
  };
  useEffect(() => {}, [addForm]);
  return (
    <div className="container-list">
      <SearchTitle title={"Quản lý nhân viên"} search={true} />
      
      {form ? (
        <div className="form-cover">
          <div className="staff-infor">
            <img src={`https://picsum.photos/id/${id}/65/65`} alt="" />
            <div className="infor">
              <Form className="" onSubmit={handleSubmitForm}>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Tên nhân viên</Label>
                  <Input
                    type="text"
                    name="staffName"
                    id="exampleText"
                    onChange={handleChange}
                    value={selectedItemData.staffName}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Mã số nhân viên</Label>
                  <Input
                    type="text"
                    name="staffId"
                    id="exampleText"
                    onChange={handleChange}
                    value={selectedItemData.staffId}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Số điện thoại</Label>
                  <Input
                    type="text"
                    name="staffPhone"
                    id="exampleText"
                    onChange={handleChange}
                    value={selectedItemData.staffPhone}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Trạng thái</Label>
                  <Input
                    type="select"
                    name="staffStatus"
                    id="exampleSelect"
                    onChange={handleChange}
                    value={selectedItemData.staffStatus}
                    disabled={disable}
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
                    onChange={handleChange}
                    value={selectedItemData.staffCCCD}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Ngày bắt đầu đi làm</Label>
                  <Input
                    type="text"
                    name="staffDayStart"
                    id="exampleText"
                    onChange={handleChange}
                    value={selectedItemData.staffDayStart}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Địa chỉ</Label>
                  <Input
                    type="text"
                    name="staffAddress"
                    id="exampleText"
                    onChange={handleChange}
                    value={selectedItemData.staffAddress}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Ngày kết thúc làm việc</Label>
                  <Input
                    type="text"
                    name="staffDayEnd"
                    id="exampleText"
                    onChange={handleChange}
                    value={selectedItemData.staffDayEnd}
                    disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Chức vụ</Label>
                  <Input
                    type="text"
                    name="role"
                    id="exampleText"
                    onChange={handleChange}
                    value={selectedItemData.role}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <button type="submit">Thêm nhân viên</button>
                </FormGroup>
              </Form>
            </div>
          </div>
          {/* <button onClick={formOn}>{!formStatus? ('Thay đổi thông tin'):('Lưu thông tin')} </button> */}
        </div>
      ) : addForm ? (
        <div className="form-cover">
          <div className="staff-infor">
            <img src={`https://picsum.photos/id/${id}/65/65`} alt="" />
            <div className="infor">
              <Form className="" onSubmit={handleSubmitForm}>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Tên nhân viên</Label>
                  <Input
                    type="text"
                    name="staffName"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffName}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Mã số nhân viên</Label>
                  <Input
                    type="text"
                    name="staffId"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffId}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Số điện thoại</Label>
                  <Input
                    type="text"
                    name="staffPhone"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffPhone}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Trạng thái</Label>
                  <Input
                    type="select"
                    name="staffStatus"
                    id="exampleSelect"
                    onChange={handleChange}
                    // value={staffData.staffStatus}
                    disabled={disable}
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
                    onChange={handleChange}
                    // value={staffData.staffCCCD}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Ngày bắt đầu đi làm</Label>
                  <Input
                    type="text"
                    name="staffDayStart"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffDayStart}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Địa chỉ</Label>
                  <Input
                    type="text"
                    name="staffAddress"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffAddress}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Ngày kết thúc làm việc</Label>
                  <Input
                    type="text"
                    name="staffDayEnd"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffDayEnd}
                    disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Chức vụ</Label>
                  <Input
                    type="text"
                    name="role"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.role}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <button type="submit">Thêm nhân viên</button>
                </FormGroup>
              </Form>
              
            </div>
          </div>
          {/* <button onClick={formOn}>{!formStatus? ('Thay đổi thông tin'):('Lưu thông tin')} </button> */}
        </div>
      ) : (
        <div className="list-cover">
          <HeaderList
            title={"Danh sách nhân viên"}
            object={"Nhân viên"}
            handleRemove={handleRemove}
            handleAdd={handleAdd}
            removeBtn_on={true}
            addBtn_on={true}
          />
          <div className="body-list">
            {data.map((item, index) => {
              return (
                <ListItem item={item} activateRemoveBtn={activate} category={'employee'} onClick={()=> handleSelectedItem(item)} ></ListItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
