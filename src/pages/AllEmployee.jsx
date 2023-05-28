import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import List from "../components/RightComponents/List/List";
import '../styles/allemployee.css'

const AllEmployee = () => {

  return (
    <div className="manager">
      <NavBar></NavBar>
      <List></List>
    </div>
  );
};

export default AllEmployee;
