import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
const ListItem = ({item,activateRemoveBtn,category,onClick}) => {
  // const category = category;
  return category === "employee" ? (
    <div
      className="list-item"
      style={{ flexBasis: "35%" }}
      onClick={onClick}
    >
      <img
        src={item.staffImg}
        alt=""
        style={{ width: "65px", height: "65px", borderRadius: "50%" }}
      />
      <div className="item-content">
        <div>
          <p>
            Họ và tên: <span>{item.staffName}</span>
          </p>
          <p>
            Mã nhân viên: <span>{item.staffId}</span>
          </p>
        </div>
        <div style={activateRemoveBtn ? { opacity: 1 } : { opacity: 0 }}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  ) : category === "camera" ? (
    <div
      className="list-item"
      style={{ flexBasis: "18%", flexDirection: "column" }}
    >
    <img src={item.cameraImg} alt="" />
      <div className="item-content">
        <div>
          <p style={{ margin: "0px" }}>
            <span>{item.cameraName}</span>
          </p>
          <p style={{ margin: "0px" }}>
            <span>{item.cameraPosition}</span>
          </p>
        </div>
      </div>
    </div>
  ) : category === "cost" ? (
    <></>
  ) : category === "park" ? (
    <div
      className="list-item"
      onClick={onClick}
      style={{ flexBasis: "22%", flexDirection: "column" }}
    >
      <div className="item-content">
        <div>
          <h1
            style={{
              textAlign: "center",
              padding: "50px 0px",
              border: "1px solid black",
              fontWeight: "600",
              fontSize: "50px",
              margin: "0px",
              marginBottom: "15px",
            }}
          >
            {item.parkName}
          </h1>
          <p style={{ margin: "0px", fontWeight: "600" }}>
            <span>Bãi {item.parkName}</span>
          </p>
          <p style={{ margin: "0px" }}>
            Sức chứa:
            <span style={{ color: "#0049B5", fontWeight: "600" }}>
              {" " + item.parkCapacity}
            </span>
          </p>
          <p style={{ margin: "0px" }}>
            Tình trạng:
            <span
              style={
                item.parkEmpty > 0
                  ? { color: "#00CD2D", fontWeight: "600" }
                  : { color: "#FF0303", fontWeight: "600" }
              }
            >
              {item.parkEmpty > 0 ? " Còn trống" : " Hết chỗ"}
            </span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ListItem;
