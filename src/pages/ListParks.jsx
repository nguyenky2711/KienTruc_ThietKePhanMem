import React, { useEffect, useState } from "react";

import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import { Table } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import ParkDetail from "./ParkDetail";
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
  const [data, setData] = useState([
    {
      parkName: "A1",
      parkID: "N101",
      parkCapacity: 100,
      parkContained: 70,
      parkEmpty: 30,
      parkCostHire: 10000,
    },
    {
      parkName: "A2",
      parkID: "N102",
      parkCapacity: 100,
      parkContained: 70,
      parkEmpty: 30,
      parkCostHire: 20000,
    },
    {
      parkName: "A3",
      parkID: "N103",
      parkCapacity: 100,
      parkContained: 70,
      parkEmpty: 30,
      parkCostHire: 30000,
    },
    {
      parkName: "A4",
      parkID: "N104",
      parkCapacity: 100,
      parkContained: 70,
      parkEmpty: 30,
      parkCostHire: 40000,
    },
    {
      parkName: "A5",
      parkID: "N105",
      parkCapacity: 100,
      parkContained: 100,
      parkEmpty: 0,
      parkCostHire: 50000,
    },
  ]);
  const [newParkdata, setNewParkData] = useState({
    parkName: "",
    parkID: "",
    parkCapacity: 0,
    parkContained: 0,
    parkEmpty: 0,
    parkCostHire: 0,
  });
  const [itemSelected, setItemSelected] = useState({});
  const [addForm, setAddForm] = useState(false);
  const [form, setForm] = useState(false);
  const handleAdd = () => {
    setAddForm(true);
  };

  const handleBackClick = () => {
    setForm(false);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewParkData((prevData) => ({
      ...prevData,
      [name]: value,
      parkEmpty: prevData.parkCapacity - prevData.parkContained,
    }));
  };
  const create_park = (newParkdata) => {
    // xử lý thêm

    console.log(newParkdata);
    // setAddForm(false);
  };

  const handleSelectedItem = (item, index) => {
    setItemSelected(item);
    setItemSelected((preData) => ({
      ...preData,
      index: index,
    }));
    setForm(true);
  };
  useEffect(() => {
    // setItemSelected((prevItem) => ({
    //   ...prevItem,
    //   parkEmpty: prevItem.parkCapacity - prevItem.parkContained,
    // }));
  }, [addForm, form, itemSelected, data]);
  return (
    <div style={{ flexBasis: "75%" }}>
      <SearchTitle title={"Quản lý bãi xe"} search={true} />

      {form ? (
        <ParkDetail
          item={itemSelected}
          onBackClick={handleBackClick}
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
                    name="parkName"
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
                    name="parkCapacity"
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
                    name="parkID"
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
                    name="parkContained"
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
                    name="parkCostHire"
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
            {data.map((item, index) => {
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
