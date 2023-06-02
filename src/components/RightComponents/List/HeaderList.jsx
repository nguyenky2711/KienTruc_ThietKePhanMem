import React from "react";

const HeaderList = (props) => {
  return (
    <div className="header-list">
      <h1>{props.title}</h1>
      <div className="btn-cover">
        <button
          className="removeBtn"
          onClick={props.handleRemove}
          style={props.removeBtn_on ? { opacity: 1, pointerEvents:"auto" } : { opacity: 0, pointerEvents:"none" }}
        >
          Xoá {props.object}
        </button>
        <button
          className="addBtn"
          onClick={props.handleAdd}
          style={props.addBtn_on ? { opacity: 1 } : { opacity: 0 }}
        >
          Thêm {props.object}
        </button>
      </div>
    </div>
  );
};

export default HeaderList;
