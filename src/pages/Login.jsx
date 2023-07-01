import React, { useEffect, useRef, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import PocketBase from "pocketbase";
import { useDispatch } from "react-redux";
import { getUserInforThunk } from "../store/action/action";
import Layout from "../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
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
    dispatch(getUserInforThunk([loginData.email, loginData.password]))
      .then((res) => {
        setRole(res.payload.record.role);
        navigate("/layout");
      })
      .catch((err) => {
        toast.error("Đăng nhập thất bại", {
          position: "top-right",
          autoClose: 3000,
          style: { color: "red", backgroundColor: "#DEF2ED" },
        });
      });
  };
  const userSessionStorage =
    JSON.parse(sessionStorage.getItem("pocketbase_auth")) ||
    JSON.parse(localStorage.getItem("pocketbase_auth"));
  console.log(userSessionStorage);
  return (
    <div
      className=""
      style={{
        width: "300px",
        margin: "0px auto",
      }}
    >
      <div
        className="header_login"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={
            "data:image/png;base64,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"
          }
          alt=""
        />
      </div>
      <Form
        className=""
        style={{
          border: "1px solid #DB2E24",
          borderRadius: "10px",
        }}
      >
        <FormGroup className="infor-item" style={{width:'270px', marginTop:'15px'}}>
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

        <FormGroup className="infor-item" style={{ width: "270px" }}>
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
        <div className="buttons">
          <button
            type="button"
            onClick={() => handleSubmit(loginData)}
            disabled={loginData.email == "" || loginData.password == ""}
            style={{color:'white', background:'#DB2E24', border:'1px solid #DB2E24'}}
          >
            Đăng nhập
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
