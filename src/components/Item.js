import React, { useState } from "react";

function Item({ name, category }) {
  
  const [isInPlace, setIsInPlace] = useState(false);

  function handleCart(){
      setIsInPlace((inPlace) => (!inPlace) )
      }

  return (
    <li className={isInPlace ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInPlace ? "remove" : "add"}
        onClick={handleCart}
      >
        {isInPlace ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;



