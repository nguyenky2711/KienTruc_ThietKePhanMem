import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layouts/Layout";
import Routers from "./routes/Routers";
import AllEmployee from "./pages/AllEmployee";
import ListParks from "./pages/ListParks";
import CostSetting from "./pages/CostSetting";
import CheckSecurity from "./pages/CheckSecurity";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/layout/*" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="list-employee" element={<AllEmployee />} />
        <Route path="list-park" element={<ListParks />} />
        <Route path="list-cost" element={<CostSetting />} />
        <Route path="list-camera" element={<CheckSecurity />} />
      </Route>
    </Routes>
  );
}

export default App;
