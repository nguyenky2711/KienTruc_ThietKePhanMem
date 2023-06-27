import React, { useEffect, useRef, useState } from "react";
// import "../../../styles/list.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import "../styles/list.css";
import EmployeeDetail from "./EmployeeDetail";
import PocketBase from "pocketbase";
import { useDispatch, useSelector } from "react-redux";
import { createStaffThunk, getStaffThunk } from "../store/action/action";
const pb = new PocketBase("https://aplonis-meln.alwaysdata.net");
const authData = await pb
  .collection("users")
  .authWithPassword("shanenoi.org@gmail.com", "32641270013264");
let listStaff = [];
const getStaffs = async () => {
  const records = await pb.collection("users").getFullList({
    sort: "-created",
  });
  let listStfs = [];
  records.forEach((record) => {
    let stf = {
      id: record.id,
      name: record.name,
      phone_number: record.phone_number,
      status: record.status,
      cccd: record.cccd,
      start_time: record.start_time,
      address: record.address,
      end_time: record.end_time,
      role: record.role,
    };
    // if (record.avatar !== "") {
    //   stf.avatar = `https://aplonis-meln.alwaysdata.net/api/files/_pb_users_auth_/${record.id}/${record.avatar}`;
    // }
    listStfs.push(stf);
  });
  return listStfs;
};
const refreshListStaffs = async () => {
  listStaff = await getStaffs();
};

await refreshListStaffs();

// import Font
const AllEmployee = () => {
  const dispatch = useDispatch();
  const { staffList } = useSelector((state) => state.slice);
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  useEffect(() => {
    dispatch(getStaffThunk([userSessionStorage.token])).then((res) => {
      console.log(res);
    });
  }, [dispatch]);
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
  const [newStaffData, setNewStaffData] = useState({
    role: "Nhân Vien",
    username: "test_usernameahah",
    email: "test273@example.com",
    emailVisibility: true,
    password: "12345678",
    passwordConfirm: "12345678",
    status: "Đang làm việc",
    end_time: "",
  });
  const [id, setId] = useState(5);
  const [disable, setDisable] = useState(true);
  const [selectedItemData, setSelectedItemData] = useState({});
  const [form, setForm] = useState(false);
  const [activate, setActivate] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [data, setData] = useState(listStaff);

  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);
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
      // staffImg: `https://picsum.photos/id/${id}/65/65`,
      // id: id,
      [name]: value,
    }));
  };
  const create_staff = (newStaffData) => {
    // xử lý thêm

    const data = {
      username: "test_usernamehi1hi",
      email: "test31@example.com",
      emailVisibility: true,
      password: "12345678",
      passwordConfirm: "12345678",
      name: "test",
      status: "Đang làm việc",
      phone_number: "test",
      cccd: "test",
      address: "test",
      start_time: "2022-01-01 10:00:00.123Z",
      end_time: "2022-01-01 10:00:00.123Z",
      role: "Nhân Vien",
      avatar: selectedImage,
    };
    dispatch(createStaffThunk([data, userSessionStorage.token])).then((res) => {
      console.log(res);
      dispatch(getStaffThunk([userSessionStorage.token])).then((res) => {
        setAddForm(false);
      });
    });
  };

  const handleSelectedItem = (item, index) => {
    setSelectedItemData(item);
    setSelectedItemData((preData) => ({
      ...preData,
      index: index,
    }));
    setForm(true);
  };

  const handleBackClick = () => {
    dispatch(getStaffThunk([userSessionStorage.token])).then((res) => {
      setForm(false);
      setData(listStaff);
    });
  };

  const handleImageSelect = () => {
    inputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      // reader.readAsArrayBuffer(file);
    }
  };
  useEffect(() => {
    setNewStaffData((preData) => ({
      ...preData,
      // avatar: selectedImage,
      start_time: "2022-01-01 10:00:00",
      end_time: "2022-01-01 10:00:00",
    }));
  }, [selectedImage]);
  return (
    <div className="container-list" style={{ flexBasis: "75%" }}>
      <SearchTitle title={"Quản lý nhân viên"} search={true} />

      {form ? (
        <EmployeeDetail
          item={selectedItemData}
          status={status}
          onBackClick={handleBackClick}
        />
      ) : addForm ? (
        <div className="form-cover">
          <div className="staff-infor">
            <div
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
              }}
              onClick={handleImageSelect}
            >
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <span>Click to select an image</span>
              )}
            </div>
            <div className="infor">
              <Form className="" onSubmit={create_staff}>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Tên nhân viên</Label>
                  <Input
                    type="text"
                    name="name"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffName}
                    // disabled={disable}
                  />
                </FormGroup>

                <FormGroup className="infor-item">
                  <Label for="exampleText">Số điện thoại</Label>
                  <Input
                    type="text"
                    name="phone_number"
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
                    name="status"
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
                    name="cccd"
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
                    name="start_time"
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
                    name="address"
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
                    name="end_time"
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
                    value={"Nhân Vien"}
                    // disabled={disable}
                  />
                </FormGroup>
              </Form>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => create_staff(newStaffData)}
                >
                  Thêm bãi xe
                </button>
              </div>
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
            {staffList?.items?.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  activateRemoveBtn={activate}
                  category={"employee"}
                  onClick={() => handleSelectedItem(item, index)}
                ></ListItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEmployee;
