import React, { useEffect, useState } from "react";
import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import { Table } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import CostDetail from "./CostDetail";

const CostSetting = () => {
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
      type: "Xe máy",
      time: "06:00 - 18:00",
      price: 10000,
    },
    {
      type: "Xe máy",
      time: "06:00 - 18:00",
      price: 10000,
    },
    {
      type: "Xe máy",
      time: "06:00 - 18:00",
      price: 10000,
    },
  ]);
  const [newCostData, setNewCostData] = useState({
    type: "Xe máy",
    time: "06:00 - 18:00",
    price: 0,
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
    setNewCostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const create_cost = (newCostData) => {
    //xử lý thêm
    
    console.log(newCostData)
    // e.preventDefault();
    // setData((prevData) => prevData.concat(newCostData));
    // setAddForm(false);
  };
  const handleSelectedItem = (item,index) => {
    setItemSelected(item);
    setSelectedIndex(index)
    setForm(true);
  };
  const handleBackClick = () => {
    setForm(false);
  };
  useEffect(() => {}, [addForm, form]);
  return (
    <div style={{ flexBasis: "75%" }}>
      <SearchTitle title={"Thiết lập chi phí"} search={true} />

      {form ? (
        <CostDetail item={itemSelected} typeData={typeData} timeData={timeData} onBackClick={handleBackClick}></CostDetail>
      ) : addForm ? (
        <div className="form-cover">
          <h1>Thêm chi phí</h1>
          <div className="staff-infor">
            {/* <img src={`https://picsum.photos/id/${id}/65/65`} alt="" /> */}
            <div className="infor">
              <Form className="">
                <FormGroup className="infor-item">
                  <Label for="exampleText">Loại xe</Label>
                  <Input
                    type="select"
                    name="type"
                    id="exampleSelect"
                    onChange={handleChange}
                    // value={staffData.staffStatus}
                    // disabled={disable}
                  >
                    {typeData.map((item, index) => {
                      return <option>{item.name}</option>;
                    })}
                  </Input>
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Thời gian gửi</Label>
                  <Input
                    type="select"
                    name="time"
                    id="exampleSelect"
                    onChange={handleChange}
                    // value={staffData.staffStatus}
                    // disabled={disable}
                  >
                    {timeData.map((item, index) => {
                      return <option>{item.value}</option>;
                    })}
                  </Input>
                </FormGroup>
                <FormGroup className="infor-item">
                  <Label for="exampleText">Giá tiền</Label>
                  <Input
                    type="number"
                    name="price"
                    id="exampleText"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Form>
              <div className="buttons">
                <button type="button" onClick={() => create_cost(newCostData)}>
                  Thêm chi phí
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="list-cover">
          <HeaderList
            title={"Bảng phí gửi xe"}
            object={"Chi phí"}
            handleAdd={handleAdd}
            removeBtn_on={false}
            addBtn_on={true}
          />
          <div className="body-list">
            <Table>
              <thead style={{ borderBottom: "1px solid #000000" }}>
                <tr>
                  <th>Loại xe</th>
                  <th>Thời gian gửi</th>
                  <th>Giá tiền</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr
                      onClick={() => handleSelectedItem(item,index)}
                      style={{
                        borderBottom: "1px solid #C8C8C8",
                        padding: "10px 0px",
                      }}
                    >
                      <td style={{ padding: "15px 0px" }}>{item.type}</td>
                      <td style={{ padding: "15px 0px" }}>{item.time}</td>
                      <td style={{ padding: "15px 0px" }}>{item.price} đồng</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CostSetting;
