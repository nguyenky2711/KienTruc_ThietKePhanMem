import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
const ListItem = ({item,activateRemoveBtn,category,onClick}) => {
  // const category = category;
  const urlAvatar = `https://aplonis-meln.alwaysdata.net/api/files/_pb_users_auth_/${item.id}/${item.avatar}`
  return category === "employee" ? (
    <div
      className="list-item"
      style={{ flexBasis: "35%" }}
      onClick={onClick}
    >
      <img
        src={urlAvatar}
        alt=""
        style={{ width: "65px", height: "65px", borderRadius: "50%" }}
      />
      <div className="item-content">
        <div>
          <p>
            Họ và tên: <span>{item.name}</span>
          </p>
          <p>
            Mã nhân viên: <span>{item.id}</span>
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
    <img src={item.screen_v2} alt="abc" style={{width:'150px', height:'150px'}} />
      <div className="item-content">
        <div>
          <p style={{ margin: "0px" }}>
            <span>{item.name}</span>
          </p>
          <p style={{ margin: "0px" }}>
            <span>{item.area}</span>
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
            {item.name}
          </h1>
          <p style={{ margin: "0px", fontWeight: "600" }}>
            <span>Bãi {item.name}</span>
          </p>
          <p style={{ margin: "0px" }}>
            Sức chứa:
            <span style={{ color: "#0049B5", fontWeight: "600" }}>
              {" " + item.capacity}
            </span>
          </p>
          <p style={{ margin: "0px" }}>
            Tình trạng:
            <span
              style={
                item.capacity - item.size > 0
                  ? { color: "#00CD2D", fontWeight: "600" }
                  : { color: "#FF0303", fontWeight: "600" }
              }
            >
              {item.capacity - item.size > 0 ? " Còn trống" : " Hết chỗ"}
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
