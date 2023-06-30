import React, { useEffect, useState } from "react";
import SearchTitle from "../components/RightComponents/List/SearchTitle";
import HeaderList from "../components/RightComponents/List/HeaderList";
import ListItem from "../components/RightComponents/List/ListItem";
import PocketBase from "pocketbase";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCameraThunk } from "../store/action/action";

const CheckSecurity = () => {
  const dispatch = useDispatch();
  const { cameraList } = useSelector((state) => state.slice);
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  useEffect(() => {
    dispatch(getCameraThunk());
    // dispatch(getCameraThunk([userSessionStorage.token]));
  }, [dispatch]);
  return (
    <div style={{ flexBasis: "75%" }}>
      <SearchTitle title={"Kiểm tra an ninh"} search={true} />
      <div className="list-cover">
        <HeaderList
          title={"Danh sách Camera"}
          object={"Nhân viên"}
          removeBtn_on={false}
          addBtn_on={false}
        />
        <div className="body-list" style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto'}}>
          {cameraList?.map((item, index) => {
          // {cameraList?.items?.map((item, index) => {
            return (
              <ListItem
                item={item}
                activateRemoveBtn={false}
                category={"camera"}
              ></ListItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckSecurity;
