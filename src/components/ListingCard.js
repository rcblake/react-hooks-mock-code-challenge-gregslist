import { useState } from "react";

function ListingCard({
  id,
  description,
  image = "https://via.placeholder.com/300x300",
  location,
  handleDelete,
}) {
  const [isFave, setIsFave] = useState(false);

  const handleFave = () => {
    setIsFave((isFave) => !isFave);
  };

  return (
    <li className="card">
      <div className={image}>
        <span className={"price"}>$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFave ? (
          <button onClick={handleFave} className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={handleFave} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          onClick={() => handleDelete({ id })}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
