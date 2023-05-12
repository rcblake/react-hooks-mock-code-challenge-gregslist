import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ filteredListings, handleDelete }) {
  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard
            key={listing.id}
            {...listing}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
