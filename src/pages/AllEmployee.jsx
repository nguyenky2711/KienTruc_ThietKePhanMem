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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment/locale/vi"; // Import locale của Việt Nam hoặc locale tương ứng
import { format, parseISO } from "date-fns";
// ...

moment.locale("vi");
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
    // username: "test_usernameahah",
    // email: "test273@example.com",
    // emailVisibility: true,
    // password: "12345678",
    // passwordConfirm: "12345678",
    status: "Đang làm việc",
    end_time: "",
    name: "",
    phone_number: "",
    cccd: "",
    address: "",
    start_time: "",
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
  const [startDate, setStartDate] = useState(new Date());

  const handleChangeStartDate = (date) => {
    setStartDate(date);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewStaffData((prevData) => ({
      ...prevData,
      // staffImg: `https://picsum.photos/id/${id}/65/65`,
      // id: id,
      [name]: value,
      start_time: startDate,
    }));
  };

  const create_staff = (newStaffData) => {
    // xử lý thêm
    const formData = new FormData();

    formData.append("username", "test_username" + `${new Date().getTime()}`);
    formData.append("email", `test@example${new Date().getTime()}.com`);
    formData.append("emailVisibility", true);
    formData.append("password", "12345678");
    formData.append("passwordConfirm", "12345678");
    formData.append("name", newStaffData.name);
    formData.append("status", newStaffData.status);
    formData.append("phone_number", newStaffData.phone_number);
    formData.append("cccd", newStaffData.cccd);
    formData.append("address", newStaffData.address);
    formData.append(
      "start_time",
      format(startDate, "yyyy-MM-dd HH:mm:ss.SSS'Z'")
    );
    formData.append("end_time", "");
    formData.append("role", newStaffData.role);
    formData.append("avatar", file);

    dispatch(createStaffThunk(formData)).then((res) => {
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
    dispatch(getStaffThunk()).then((res) => {
      setForm(false);
      setData(listStaff);
    });
  };
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
      // data2.avatar = temp_file.name;
    }
  };
  console.log(file);
  const handleImageClick = () => {
    // Clear the selected image
    setSelectedImage(null);
    document.getElementById("fileInput").click();
  };
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  }
  return (
    <div className="container-list" style={{ flexBasis: "70%" }}>
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
                  <DatePicker
                    selected={startDate}
                    onChange={handleChangeStartDate}
                    dateFormat="yyyy-MM-dd HH:mm:ss.SSS[Z]"
                    value={moment(startDate).format(
                      "yyyy-MM-dd HH:mm:ss.SSS[Z]"
                    )}
                    // minDate={new Date()}
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
                    disabled
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
                    disabled
                  />
                </FormGroup>
              </Form>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => create_staff(newStaffData)}
                >
                  Thêm nhân viên
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
            removeBtn_on={false}
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
