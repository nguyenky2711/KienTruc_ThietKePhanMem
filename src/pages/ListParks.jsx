import React, { useEffect, useState } from "react";

import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import { Form, FormGroup, Input, Label } from "reactstrap";

import ParkDetail from "./ParkDetail";

import PocketBase from "pocketbase";
import { useDispatch, useSelector } from "react-redux";
import {
  createCameraThunk,
  createParkThunk,
  getCameraThunk,
  getParkThunk,
} from "../store/action/action";

const pb = new PocketBase("https://aplonis-meln.alwaysdata.net");
const authData = await pb
  .collection("users")
  .authWithPassword("shanenoi.org@gmail.com", "32641270013264");

let listAreas = [];
const getAreas = async () => {
  const records = await pb
    .collection("areas")
    .getFullList({ sort: "-created" });
  let listAs = [];
  records.forEach((record) => {
    console.log(record);
    let a = {
      id: record.id,
      parkName: record.name,
      parkID: record.code,
      parkCapacity: record.capacity,
      parkContained: record.size,
      parkEmpty: record.capacity - record.size,
      parkCostHire: record.price,
    };
    listAs.push(a);
  });
  return listAs;
};
const refreshListAreas = async () => {
  listAreas = await getAreas();
};

await refreshListAreas();

const ListParks = () => {
  const typeData = [
    {
      id: 1,
      name: "Xe máy",
    },
    {
      id: 2,
      name: "Xe điện",
    },
    {
      id: 3,
      name: "Xe Oto",
    },
  ];
  const timeData = [
    {
      id: 1,
      value: "06:00 - 18:00",
    },
    {
      id: 2,
      value: "18:00 - 06:00",
    },
  ];
  const [data, setData] = useState(listAreas);
  const [newParkdata, setNewParkData] = useState({
    name: "",
    code: "",
    price: 0,
    capacity: 0,
    size: 0,
  });
  const [itemSelected, setItemSelected] = useState({});
  const [addForm, setAddForm] = useState(false);
  const [form, setForm] = useState(false);
  const handleAdd = () => {
    setAddForm(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewParkData((prevData) => ({
      ...prevData,
      [name]: value,
      parkEmpty: prevData.parkCapacity - prevData.parkContained,
    }));
  };
  const dispatch = useDispatch();
  const { parkList, cameraList } = useSelector((state) => state.slice);
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  console.log(userSessionStorage);
  const create_park = (newParkdata) => {
    // xử lý thêm

    dispatch(createParkThunk(newParkdata)).then((res) => {
      dispatch(getParkThunk()).then((res) => {
        // dispatch(getParkThunk(userSessionStorage.token)).then((res) => {
        console.log(res.payload[0]);
        setAddForm(false);
        // setData(listAreas);
        const data = {
          // name: "Camera " + (parkList.items.length + 1),
          name: "Camera " + (parkList.length + 1),
          area: res.payload[0].id,
          screen_v2: `https://picsum.photos/id/${
            // parkList.items.length + 1
            parkList.length + 1
          }/200/300`,
        };
        dispatch(createCameraThunk(data)).then((res) => {});
      });
    });
  };

  const handleSelectedItem = (item, index) => {
    setItemSelected(item);
    setItemSelected((preData) => ({
      ...preData,
      index: index,
    }));
    setForm(true);
  };
  const handleBackClick = () => {
    dispatch(getParkThunk()).then((res) => {
      // dispatch(getParkThunk(userSessionStorage.token)).then((res) => {
      setData(listAreas);
      setForm(false);
    });
  };
  useEffect(() => {
    dispatch(getParkThunk());
    // dispatch(getParkThunk(userSessionStorage.token));
    dispatch(getCameraThunk());
    // dispatch(getCameraThunk(userSessionStorage.token));
  }, [dispatch]);
  return (
    <div style={{ flexBasis: "75%" }}>
      <SearchTitle title={"Quản lý bãi xe"} search={true} />

      {form ? (
        <ParkDetail
          item={itemSelected}
          onBackClick={handleBackClick}
          idCamera={
            // cameraList?.items?.find((item) => item.area === itemSelected.id)
            cameraList?.find((item) => item.area === itemSelected.id)?.id ||
            null
          }
        ></ParkDetail>
      ) : addForm ? (
        <div className="form-cover">
          <h1>Thêm chi phí</h1>
          <div className="staff-infor">
            <div className="infor">
              <Form className="">
                <FormGroup className="infor-item">
                  <Label for="exampleText">Tên bãi giữ xe</Label>
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
                  <Label for="exampleText">Sức chứa tối đa</Label>
                  <Input
                    type="number"
                    name="capacity"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffName}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Mã bãi</Label>
                  <Input
                    type="text"
                    name="code"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffName}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Đã chứa</Label>
                  <Input
                    type="number"
                    name="size"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffName}
                    // disabled={disable}
                  />
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Giá thuê bãi/ngày</Label>
                  <Input
                    type="number"
                    name="price"
                    id="exampleText"
                    onChange={handleChange}
                    // value={staffData.staffName}
                    // disabled={disable}
                  />
                </FormGroup>
              </Form>
              <div className="buttons">
                <button type="button" onClick={() => create_park(newParkdata)}>
                  Thêm bãi xe
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="list-cover">
          <HeaderList
            title={"Danh sách bảng giữ xe"}
            object={"Bãi xe"}
            handleAdd={handleAdd}
            removeBtn_on={false}
            addBtn_on={true}
          />
          <div
            className="body-list"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
            }}
          >
            {parkList?.map((item, index) => {
              // {parkList?.items?.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  activateRemoveBtn={false}
                  category={"park"}
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

export default ListParks;
