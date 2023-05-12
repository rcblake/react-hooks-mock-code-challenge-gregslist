import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({ handleSearchFilter }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchFilter={handleSearchFilter} />
      <Sort />
    </header>
  );
}

export default Header;
