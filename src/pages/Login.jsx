import React, { useEffect, useRef, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import PocketBase from "pocketbase";
import { useDispatch } from "react-redux";
import { getUserInforThunk } from "../store/action/action";
import Layout from "../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState();
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (loginData) => {
    // console.log(loginData);
    dispatch(getUserInforThunk([loginData.email, loginData.password])).then(
      (res) => {
        setRole(res.payload.record.role);
        navigate("/layout");
      }
    );
  };
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  console.log(userSessionStorage);
  return (
    <div className="infor">
      <Form className="">
        <FormGroup className="infor-item">
          <Label for="exampleText">Email</Label>
          <Input
            type="text"
            name="email"
            id="exampleText"
            onChange={handleChange}
            // value={staffData.staffName}
            // disabled={disable}
          />
        </FormGroup>

        <FormGroup className="infor-item">
          <Label for="exampleText">Mật khẩu</Label>
          <Input
            type="password"
            name="password"
            id="exampleText"
            onChange={handleChange}
            // value={staffData.staffPhone}
            // disabled={disable}
          />
        </FormGroup>
      </Form>
      <div className="buttons">
        <button type="button" onClick={() => handleSubmit(loginData)}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default Login;
