import React, { useEffect, useState } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import PocketBase from "pocketbase";
import { useDispatch } from "react-redux";
import {
  deleteCameraThunk,
  deleteParkThunk,
  updateParkThunk,
} from "../store/action/action";

const ParkDetail = ({ item, idCamera, onBackClick }) => {
  console.log(idCamera);
  const [disableInput, setDisableInput] = useState(true);
  const [itemSelected, setItemSelected] = useState(item);
  console.log(itemSelected);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (!disableInput) {
      setItemSelected((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };
  const dispatch = useDispatch();
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  const handleDeletePark = async (itemSelected) => {
    // xử lý xoá
    dispatch(deleteCameraThunk([idCamera, userSessionStorage.token])).then(
      (res) => {
        dispatch(
          deleteParkThunk([itemSelected.id, userSessionStorage.token])
        ).then((res) => {
          onBackClick();
        });
      }
    );
  };
  const handleChangePark = (itemSelected) => {
    //xử lý sửa
    let updateData = {
      name: itemSelected.name,
      code: itemSelected.code,
      price: itemSelected.price,
      size: itemSelected.size,
      id: itemSelected.id,
      capacity: itemSelected.capacity,
    };
    dispatch(
      updateParkThunk([itemSelected.id, updateData, userSessionStorage.token])
    ).then((res) => {
      setDisableInput(true);
      onBackClick();
    });
  };
  const parkEmpty = itemSelected.capacity - itemSelected.size;
  return (
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
                value={itemSelected.name}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Sức chứa tối đa</Label>
              <Input
                type="number"
                name="capacity"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.capacity}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Mã bãi</Label>
              <Input
                type="text"
                name="code"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.code}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Đã chứa</Label>
              <Input
                type="number"
                name="size"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.size}
                disabled={disableInput}
              />
            </FormGroup>
            <FormGroup className="infor-item">
              <Label for="exampleText">Giá thuê bãi/ngày</Label>
              <Input
                type="number"
                name="price"
                id="exampleText"
                onChange={handleInputChange}
                value={itemSelected.price}
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
                value={parkEmpty}
                disabled
              />
            </FormGroup>
          </Form>
          <div className="buttons">
            <button
              type="button"
              onClick={() => handleDeletePark(itemSelected)}
            >
              Xoá bãi giữ xe
            </button>
            {disableInput ? (
              <button type="button" onClick={() => setDisableInput(false)}>
                Thay đổi thông tin bãi
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleChangePark(itemSelected)}
              >
                Lưu thay đổi
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetail;
