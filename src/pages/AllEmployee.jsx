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
    // dispatch(getStaffThunk([userSessionStorage.token])).then((res) => {
    //   console.log(res);
    // });
    dispatch(getStaffThunk()).then((res) => {
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
  const [file, setFile] = useState();
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
  var data2 = {
    username: `test_username${new Date().getTime()}`,
    email: `test@example${new Date().getTime()}.com`,
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
    avatar: null,
  };
  const create_staff = (newStaffData) => {
    // xử lý thêm
    const formData = new FormData();

    formData.append("username", "test_username" + `${new Date().getTime()}`);
    formData.append("email", `test@example${new Date().getTime()}.com`);
    formData.append("emailVisibility", true);
    formData.append("password", "12345678");
    formData.append("passwordConfirm", "12345678");
    formData.append("name", "test");
    formData.append("status", "Đang làm việc");
    formData.append("phone_number", "test");
    formData.append("cccd", "test");
    formData.append("address", "test");
    formData.append("start_time", "2022-01-01 10:00:00.123Z");
    formData.append("end_time", "2022-01-01 10:00:00.123Z");
    formData.append("role", "Nhân Vien");
    formData.append("avatar", file);

    console.log(data2);
    // dispatch(createStaffThunk([data2, userSessionStorage.token])).then(
    dispatch(createStaffThunk(formData)).then((res) => {
      // console.log(res);
      // dispatch(getStaffThunk([userSessionStorage.token])).then((res) => {
      //   setAddForm(false);
      // });
      dispatch(getStaffThunk()).then((res) => {
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
    // dispatch(getStaffThunk([userSessionStorage.token])).then((res) => {
    //   setForm(false);
    //   setData(listStaff);
    // });
    dispatch(getStaffThunk()).then((res) => {
      setForm(false);
      setData(listStaff);
    });
  };

  // const handleFileChange = (event) => {
  //   const fileInput = event.target;
  //   const files = fileInput.files;

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     // formData.append('avatar', file);
  //     console.log(file);
  //   }
  // };
  const handleFileChange = (event) => {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files && files.length > 0) {
      const temp_file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(temp_file);
      // setFile((preData) => ({
      //   ...preData,
      //   avatar: temp_file,
      // }));
      setFile(files[0]);
      data2.avatar = temp_file.name;
    }
  };
  console.log(file);
  const handleImageClick = () => {
    // Clear the selected image
    setSelectedImage(null);
    document.getElementById("fileInput").click();
  };
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
              onClick={handleImageClick}
            >
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }}
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
            {staffList?.map((item, index) => {
              // {staffList?.items?.map((item, index) => {
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
