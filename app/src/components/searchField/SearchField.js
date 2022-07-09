import "./searchField.less";

import * as React from "react";
import SearchIcon from "icons/search-icon";

const SearchField = () => {
  return (
    <div className="search-field">
      <input placeholder="Search" className="peer" />
      <SearchIcon className="peer-focus:text-primary" />
    </div>
  );
};

export default SearchField;
