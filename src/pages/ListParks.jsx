import React, { useEffect, useState } from "react";
import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import { Table } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
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
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [disableInput, setDisableInput] = useState(true);
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
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (!disableInput) {
      setItemSelected((prevItem) => ({
        ...prevItem,
        [name]: value,
        parkEmpty: prevItem.parkCapacity - prevItem.parkContained,
      }));
    }    
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setData((prevData) => prevData.concat(newParkdata));
    setAddForm(false);
  };
  const handleDeletePark = (parkID) => {
    // console.log(123)
    // setData((prevData) => prevData.filter((item) => item.parkID !== parkID))
  };
  const handleChangePark = (e) => {
    console.log(itemSelected);
    if (selectedIndex !== -1) {
      const newData = [...data];
      newData[selectedIndex] = itemSelected;
      setData(newData);
    }
    setDisableInput(true);
    setForm(false);
  };
  const handleSelectedItem = (item, index) => {
    setItemSelected(item);
    setSelectedIndex(index);
    setForm(true);
  };
  useEffect(() => {
    setItemSelected((prevItem) => ({
      ...prevItem,
      parkEmpty: prevItem.parkCapacity - prevItem.parkContained,
    }));
  }, [addForm, form, itemSelected]);
  return (
    <div style={{ flexBasis: "75%" }}>
      <SearchTitle title={"Quản lý bãi xe"} search={true} />

      {form ? (
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
                    value={itemSelected.parkEmpty}
                    disabled
                  />
                </FormGroup>
              </Form>
              <div className="buttons">
                <button type="button" onClick={()=>handleDeletePark(itemSelected.parkID)}>
                  Xoá bãi giữ xe
                </button>
                {disableInput ? (
                  <button type="button" onClick={() => setDisableInput(false)}>
                    Thay đổi thông tin bãi
                  </button>
                ) : (
                  <button type="button" onClick={handleChangePark}>
                    Lưu thay đổi
                  </button>
                )}
              </div>
            </div>
          </div>         
        </div>
      ) : addForm ? (
        <div className="form-cover">
          <h1>Thêm chi phí</h1>
          <div className="staff-infor">
            {/* <img src={`https://picsum.photos/id/${id}/65/65`} alt="" /> */}
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
                <button type="button" onClick={handleSubmitForm}>
                  Thêm chi phí
                </button>
                {/* <button type="button" onClick={deleteCost}>Xoá chi phí</button> */}
              </div>
            </div>
          </div>
          {/* <button onClick={formOn}>{!formStatus? ('Thay đổi thông tin'):('Lưu thông tin')} </button> */}
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
          <div className="body-list" style={{display:'grid', gridTemplateColumns:'auto auto auto auto'}}>
            {data.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  activateRemoveBtn={false}
                  category={"park"}
                  onClick={()=>handleSelectedItem(item,index)}
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
