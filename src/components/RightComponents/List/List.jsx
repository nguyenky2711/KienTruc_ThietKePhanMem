import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import Font
const List = () => {
  return (
    <div className="container-list">
      <div className="searchTilte">
        <h1>Quan ly nhan vien</h1>
        <div className="searchbar">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>
      <div className="list-cover">
        <div className="header-list">
          <h1>Danh sach nhan vien</h1>
          <div className="btn-cover">
            <button>Xoa nhan vien</button>
            <button>Them nhan vien</button>
          </div>
        </div>
        <div className="body-list"></div>
      </div>
    </div>
  );
};

export default List;
