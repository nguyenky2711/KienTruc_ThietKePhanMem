import React, { useEffect, useState } from "react";
import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import { Table } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (!disableInput) {
      setItemSelected((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // setId(id + 1);
    setData((prevData) => prevData.concat(newCostData));
    setAddForm(false);
  };
  const handleDeleteCost = (e) => {};
  const handleChangeCost = (e) => {
    console.log(itemSelected)
    if(selectedIndex !== -1) {
      const newData = [...data]
      newData[selectedIndex] = itemSelected
      setData(newData)
    }
    setDisableInput(true)
    setForm(false)
  };
  console.log(data)
  const handleSelectedItem = (item,index) => {
    setItemSelected(item);
    setSelectedIndex(index)
    setForm(true);
  };
  useEffect(() => {}, [addForm, form]);
  return (
    <div style={{ flexBasis: "75%" }}>
      <SearchTitle title={"Thiết lập chi phí"} search={true} />

      {form ? (
        <div className="form-cover">
          <h1>Thông tin chi phí</h1>
          <div className="staff-infor">
            <div className="infor">
              <Form className="">
                <FormGroup className="infor-item">
                  <Label for="exampleText">Loại xe</Label>
                  <Input
                    type="select"
                    name="type"
                    id="exampleSelect"
                    onChange={handleInputChange}
                    value={itemSelected.type}
                    disabled={disableInput}
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
                    onChange={handleInputChange}
                    value={itemSelected.time}
                    disabled={disableInput}
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
                    onChange={handleInputChange}
                    value={itemSelected.price}
                    disabled={disableInput}
                  />
                </FormGroup>
              </Form>
              <div className="buttons">
                <button type="button" onClick={handleDeleteCost}>
                  Xoá chi phí
                </button>
                {disableInput ? (
                  <button type="button" onClick={() => setDisableInput(false)}>
                    Thay đổi chi phí
                  </button>
                ) : (
                  <button type="button" onClick={handleChangeCost}>
                    Lưu chi phí
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* <button onClick={formOn}>{!formStatus? ('Thay đổi thông tin'):('Lưu thông tin')} </button> */}
        </div>
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
