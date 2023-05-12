import { useState } from "react";

function Sort() {
  const [sortStyle, setSortStyle] = useState("default");

  const toggleAlphaZed = () => {
    setSortStyle(
      sortStyle === "default" || sortStyle === "zed" ? "alpha" : "zed"
    );
  };

  const alpha = [...employees].sort((a, b) => (a.name > b.name ? 1 : -1));

  const alphaZedButton =
    sortStyle === "default" || sortStyle === "zed" ? "A -> Z" : "Z -> A";

  return (
    <div>
      <div>Sort By Location</div>
      <button onClick={toggleAlphaZed}>{alphaZedButton}</button>
      <button onclick></button>
    </div>
  );
}
export default Sort;
