import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListingsArray, setAllListingsArray] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then((res) => res.json())
      .then(setAllListingsArray);
  }, []);

  const handleDelete = ({ id }) => {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" });
    setAllListingsArray(
      allListingsArray.filter((listing) => listing.id !== id)
    );
  };

  const handleSearchFilter = (searchValue) => {
    setSearchFilter(searchValue);
  };

  const filteredListings = allListingsArray.filter((listing) =>
    listing.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="app">
      <Header handleSearchFilter={handleSearchFilter} />
      <ListingsContainer
        filteredListings={filteredListings}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
