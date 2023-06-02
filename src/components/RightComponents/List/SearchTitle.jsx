import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
const SearchTitle = (props) => {
  return (
    <div className="searchTilte">
        <h1>{props.title}</h1>
        <div className="searchbar" style={props.search ? {opacity:1}: {opacity:0}}>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input type="text" />
        </div>
    </div>
  )
}

export default SearchTitle