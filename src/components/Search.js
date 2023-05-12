import { useState } from "react";

function Search({ handleSearchFilter }) {
  const [searchFeild, setSearchField] = useState("");

  const handleField = (e) => {
    setSearchField(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchFilter(e.target.search.value);
    setSearchField("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchFeild}
        onChange={handleField}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
