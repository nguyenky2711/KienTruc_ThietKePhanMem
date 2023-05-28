import React, { useState, useEffect } from "react";
import "../styles/home.css";
import CardIn from "../components/Card/CardIn";
import CardOut from "../components/Card/CardOut";
import Header from "../components/Header/Header";
// import Header from '../Header/Header.jsx'

const Home = () => {
  const [category, setCategory] = useState("IN");
  const [renderIn, setRenderIn] = useState(true);
  const [renderOut, setRenderOut] = useState(false);
  useEffect(() => {
    if (category === "IN") {
      setRenderIn(true)
      setRenderOut(false)
    }
    if (category === "OUT") {
      setRenderIn(false)
      setRenderOut(true)

    }
  }, [category]);
  return (
    
    <div className="container">
      <Header></Header>
      <div className="navbar">
        {/* <a href="">Quẹt thẻ vào</a>
        <a href="">Quẹt thẻ ra</a> */}
        <button
          className={`all-btn  ${category === "IN" ? "isBtnActive" : ""} `}
          onClick={() => setCategory("IN")}
        >
          Quẹt thẻ vào
        </button>
        <button
          className={`all-btn  ${category === "OUT" ? "isBtnActive" : ""} `}
          onClick={() => setCategory("OUT")}
        >
          Quẹt thẻ ra
        </button>
      </div>
      {
        renderIn && <CardIn></CardIn>
      }
      {
        renderOut && <CardOut></CardOut>
      }      
      
    </div>
  );
};

export default Home;
