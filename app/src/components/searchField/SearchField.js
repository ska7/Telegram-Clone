import * as React from "react";
import "./searchField.less";
import SearchIcon from "icons/search-icon";

const SearchField = () => {
  return (
    <div className="search-field">
      <input placeholder="Search" />
      <SearchIcon />
    </div>
  );
};

export default SearchField;
